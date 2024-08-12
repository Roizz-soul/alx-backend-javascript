const getStudentIdsSum = (students) => students.map((el) => el.id)
  .reduce((acc, val) => acc + val, 0);

export default getStudentIdsSum;
