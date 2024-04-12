export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (let i = 0; i < reportWithIterator.length; i += 1) {
    str += reportWithIterator[i];
    if (reportWithIterator[i + 1]) {
      str += ' | ';
    }
  }

  return str;
}
