/* eslint-disable no-param-reassign */
const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((el) => el.location === city).map((el) => {
    for (let i = 0; i < newGrades.length; i += 1) {
      if (newGrades[i].studentId === el.id) {
        el.grade = newGrades[i].grade;
        return el;
      }
      el.grade = 'N/A';
    }
    return el;
  });

export default updateStudentGradeByCity;
