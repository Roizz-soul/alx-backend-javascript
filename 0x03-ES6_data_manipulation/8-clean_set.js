export default function cleanSet(set, startString) {
  let string = '';
  if (startString === string) {
    return string;
  }
  for (const i of set) {
    if (i.startsWith(startString)) {
      string += `${i.slice(startString.length)}-`;
    }
  }

  if (string.endsWith('-')) {
    return string.slice(0, string.length - 1);
  }

  return string;
}
