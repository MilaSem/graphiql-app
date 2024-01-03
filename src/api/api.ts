import {
  getIntrospectionQuery,
  buildClientSchema,
  type GraphQLSchema,
} from 'graphql';

export const requestData = async (
  url: string,
  query: string,
  headers: string[][],
): Promise<void> => {
  return fetch(url, {
    method: 'POST',
    headers: Object.fromEntries(headers),
    body: JSON.stringify({ query }),
  }).then(async (res) => res.json());
};

export const requestIntSchema = async (url: string): Promise<GraphQLSchema> => {
  const { data, errors } = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  }).then(async (res) => res.json());

  if (errors) {
    throw new Error('Error fetching remote schema!');
  }

  return buildClientSchema(data);
};
