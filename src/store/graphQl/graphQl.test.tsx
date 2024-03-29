import '@testing-library/jest-dom';
import {
  graphQlReduser,
  setUid,
  setApiUrl,
  setArrHeaders,
  setHeaders,
  setRequest,
  setResponse,
  setSchema,
  setVariables,
} from './graphQl.slice';

describe('check actions in graphQlReduser', () => {
  const initialState = {
    uid: '',
    apiUrl: '',
    response: '',
    headers: '',
    variables: '',
    request: '',
    arrHeaders: [['Content-type', 'application/json']],
    schema: '',
  };
  it('return initial state when passed empty event', () => {
    const result = graphQlReduser(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });
  it('change uid by setUid', () => {
    const action = { type: setUid.type, payload: 'test uid' };
    const result = graphQlReduser(initialState, action);
    expect(result.uid).toEqual('test uid');
  });
  it('change apiUrl by setApiUrl', () => {
    const action = {
      type: setApiUrl.type,
      payload: 'countries.trevorblades.com/',
    };
    const result = graphQlReduser(initialState, action);
    expect(result.apiUrl).toEqual('https://countries.trevorblades.com/');
  });
  it('change arrHeaders by setArrHeaders', () => {
    const action = {
      type: setArrHeaders.type,
      payload: [
        ['Content-type', 'application/json'],
        ['year', '1984'],
      ],
    };
    const result = graphQlReduser(initialState, action);
    expect(result.arrHeaders).toEqual([
      ['Content-type', 'application/json'],
      ['year', '1984'],
    ]);
  });
  it('change headers by setHeaders', () => {
    const action = {
      type: setHeaders.type,
      payload: "{'Content-type': 'application/json'}",
    };
    const result = graphQlReduser(initialState, action);
    expect(result.headers).toEqual("{'Content-type': 'application/json'}");
  });
  it('change request by setRequest', () => {
    const action = {
      type: setRequest.type,
      payload: 'query {__schema{types{name,fields{name}}}}',
    };
    const result = graphQlReduser(initialState, action);
    expect(result.request).toEqual(
      'query {__schema{types{name,fields{name}}}}',
    );
  });
  it('change response by setResponse', () => {
    const action = {
      type: setResponse.type,
      payload: '{"data": {"character": {"name": "Rick Sanchez"}}}',
    };
    const result = graphQlReduser(initialState, action);
    expect(result.response).toEqual(
      '{"data": {"character": {"name": "Rick Sanchez"}}}',
    );
  });
  it('change variables by setVariables', () => {
    const action = { type: setVariables.type, payload: '{id: 10, page: 1}' };
    const result = graphQlReduser(initialState, action);
    expect(result.variables).toEqual('{id: 10, page: 1}');
  });
  it('change schema by setSchema', () => {
    const action = { type: setSchema.type, payload: 'test schema' };
    const result = graphQlReduser(initialState, action);
    expect(result.schema).toEqual('test schema');
  });
});
