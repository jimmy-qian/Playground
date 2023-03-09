import { useRouter } from 'next/router';

export const useQueryParams = <TQueryType extends Query>() => {
  const router = useRouter();

  const setQueries = (query: TQueryType) => {
    for (const key in query) {
      if (query[key] === '') {
        delete query[key];
      }
    }

    router.replace({ search: new URLSearchParams(query).toString() });
  };

  return {
    queryParams: router.query as Record<string, string>,
    setQueryParams: setQueries,
  };
};

type Query = Record<string, any> | URLSearchParams;
