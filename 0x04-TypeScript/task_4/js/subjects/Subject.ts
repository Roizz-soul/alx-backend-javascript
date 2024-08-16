/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;


    // Setter method
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
