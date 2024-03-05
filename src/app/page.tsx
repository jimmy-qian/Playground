import * as i from 'types';
import * as React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { fetchUser } from 'queries/user';
import Logo from 'vectors/logo.svg';

type Props = i.NextPageProps;

export const metadata: Metadata = {
  title: 'Home',
};

const Page: React.FC<Props> = async () => {
  // eslint-disable-next-line
  const user = await fetchUser('123-456-789');

  return (
    <main>
      <header className="mb-12 grid place-items-center bg-black px-2 py-12">
        <Logo className="w-64" />
      </header>
      <section className="grid place-items-center px-2">
        <Link href="https://github.com/react-prime/react-prime-ssr" target="_blank">
          <button className="flex items-center justify-center gap-2 rounded-md border-2 border-gray-600 bg-gray-100 px-4 py-3 font-bold shadow-lg">
            <Image src="/images/github-logo.png" width={20} height={20} alt="github" />
            React Prime Web
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Page;
