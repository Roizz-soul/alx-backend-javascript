const fs = require('fs');

const countStudents = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, 'utf-8');
    const arr = data.split('\n');
    if (arr[arr.length - 1] === '') {
      arr.pop();
    }
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = arr[i].split(',');
    }

    const dict = [];
    let CScount = 0;
    let CSnames = '';
    let SWEnames = '';
    let SWEcount = 0;
    for (let i = 1; i < arr.length; i += 1) {
      const per = {};
      for (let j = 0; j < arr[0].length; j += 1) {
        per[arr[0][j]] = arr[i][j];
      }
      if (per.field === 'CS') {
        CScount += 1;
        CSnames = CSnames === '' ? per.firstname : `${CSnames}, ${per.firstname}`;
      } else if (per.field === 'SWE') {
        SWEcount += 1;
        SWEnames = SWEnames === '' ? per.firstname : `${SWEnames}, ${per.firstname}`;
      }
      dict.push(per);
    }
    console.log(`Number of students: ${dict.length}`);
    console.log(`Number of students in CS: ${CScount}. List: ${CSnames}`);
    console.log(`Number of students in SWE: ${SWEcount}. List: ${SWEnames}`);
  } catch (E) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
