export const prettifyGraphQL = (query: string): string => {
  let result = '';
  let level = 0;
  let insideString = false;

  for (const char of query) {
    switch (char) {
      case '{':
        result += ` {\n${'  '.repeat(++level)}`;
        break;
      case '}':
        result = result.trimRight() + `\n${'  '.repeat(--level)}}`;
        break;
      case ',':
        result += `,\n${'  '.repeat(level)}`;
        break;
      case '"':
        insideString = !insideString;
        result += '"';
        break;
      case '\n':
      case ' ':
        if (!insideString) {
          continue;
        }
      // eslint-disable-next-line no-fallthrough
      default:
        result += char;
    }
  }

  return result.trim();
};

export function prettifyJSON(jsonString: string): string {
  let result = '';
  let indentLevel = 0;
  let insideString = false;

  for (const char of jsonString) {
    switch (char) {
      case '{':
      case '[':
        result += char + '\n' + '  '.repeat(++indentLevel);
        break;
      case '}':
      case ']':
        result = result.trimRight() + '\n' + '  '.repeat(--indentLevel) + char;
        break;
      case ',':
        result += ',\n' + '  '.repeat(indentLevel);
        break;
      case '"':
        insideString = !insideString;
        result += '"';
        break;
      case '\n':
      case ' ':
        if (!insideString) {
          continue;
        }
      // eslint-disable-next-line no-fallthrough
      default:
        result += char;
    }
  }

  return result.trim();
}
