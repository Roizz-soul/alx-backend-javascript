export default function createIteratorObject(report) {
  let myList = [];
  for (const item of Object.keys(report.allEmployees)) {
    myList = myList.concat(report.allEmployees[item]);
  }
  /* const iter = myList[Symbol.iterator](); */

  return myList;
}
