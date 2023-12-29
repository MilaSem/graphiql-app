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

const schemaQuery = 'query {__schema{types{name,fields{name}}}}';

export const requestSchema = async (
  url: string,
  query: string = schemaQuery,
): Promise<void> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }).then(async (res) => res.json());
};
