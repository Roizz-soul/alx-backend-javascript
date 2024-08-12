const getStudentsByLocation = (students, locate) => students.filter((el) => el.location === locate);

export default getStudentsByLocation;
