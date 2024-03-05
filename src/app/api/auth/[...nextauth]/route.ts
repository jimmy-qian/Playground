import NextAuth, { NextAuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { decodeJwt } from 'jose';

import { nextApi } from 'services/api';

// Extend JWT and User types for our use case
declare module 'next-auth/jwt' {
  export interface JWT {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    error?: string;
  }
}

declare module 'next-auth' {
  export interface User {
    access: string;
    refresh: string;
  }

  export interface Session {
    accessToken: string;
    refreshToken: string;
    error?: string;
  }
}

const TOKEN_EXPIRE_FALLBACK = 5 * 60 * 1000;

// Refresh util for username/password login
// Refer to the documentation for other providers
const refreshToken = async (token: JWT) => {
  const jwtRefreshResponse = await nextApi('/jwt/refresh', {
    method: 'post',
    body: { refresh: token.refreshToken },
  });

  token.accessToken = jwtRefreshResponse.body.access;

  const expiresAt = decodeJwt(token.accessToken).exp;
  token.expiresAt = expiresAt || TOKEN_EXPIRE_FALLBACK;

  return token;
};

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const response = await nextApi<{
            token: string;
          }>('/jwt', { method: 'post', body: credentials });

          return {
            access: response.token,
            name: credentials?.username,
          } as User;
        } catch (err: any) {
          if (err instanceof Error) {
            console.error(err.message);
          } else {
            console.error(err);
          }
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      try {
        // Initial sign in
        if (user) {
          token.accessToken = user.access;
          token.refreshToken = user.refresh;

          const expiresAt = decodeJwt(token.accessToken).exp;
          token.expiresAt = expiresAt || TOKEN_EXPIRE_FALLBACK;
        }

        if (!token) {
          throw new Error('No token returned');
        }

        // Return active token
        if (Date.now() - 5000 < token.expiresAt) {
          return token;
        }
      } catch (err: any) {
        console.error('NextAuth: Missing token', err.message);

        return {
          ...token,
          error: 'MissingAccessTokenError',
        };
      }

      try {
        // Return active token
        return refreshToken(token);
      } catch (err: any) {
        console.error('NextAuth: Failed to refresh token', err.message);

        return {
          ...token,
          error: 'RefreshAccessTokenError',
        };
      }
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      if (token.error) {
        session.error = token.error;
      }

      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
