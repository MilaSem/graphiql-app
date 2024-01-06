const removeSpaces = (str: string): string => {
  return str
    .split('\n')
    .filter((word) => word !== '')
    .join('')
    .split(' ')
    .filter((word) => word !== '')
    .join(' ');
};

export const prettifyGraphQL = (query: string): string => {
  let result = '';
  let level = 0;
  let insideString = false;
  const newQuery = removeSpaces(query);

  console.log(newQuery);

  for (const char of newQuery) {
    switch (char) {
      case '{':
        result = result.trim() + ` {\n${' '.repeat(level)}`;
        level++;
        break;
      case '}':
        level--;
        result = result.trim() + `\n${' '.repeat(level)}}\n`;
        break;
      case ',':
        result += `,\n${'  '.repeat(level)}`;
        break;
      case '"':
        insideString = !insideString;
        result += '"';
        break;
      default:
        result += char;
    }
  }

  console.log(result);

  return result.trim();
};

export function prettifyJSON(jsonString: string): string {
  if (!jsonString) return '';
  const json = JSON.parse(jsonString);
  const result = JSON.stringify(json, null, 2);
  console.log(result);

  return result;
}
