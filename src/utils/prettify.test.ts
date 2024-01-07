import { removeSpaces, prettifyGraphQL, prettifyJSON } from './prettify';

describe('removeSpaces function', () => {
  it('should remove spaces from a string', () => {
    const inputString = '  hello  world  ';
    const result = removeSpaces(inputString);

    expect(result).toBe('hello world');
  });
});

describe('prettifyGraphQL function', () => {
  it('should prettify a GraphQL query', () => {
    const inputQuery = 'query { user { name email } }';
    const result = prettifyGraphQL(inputQuery);

    expect(result).toBe('query {\n user {\n  name email\n }\n}');
  });
});

describe('prettifyJSON function', () => {
  it('should prettify a JSON string', () => {
    const inputJSON = '{"name":"John","age":30,"city":"New York"}';
    const result = prettifyJSON(inputJSON);

    expect(result).toBe(
      '{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}',
    );
  });
});
