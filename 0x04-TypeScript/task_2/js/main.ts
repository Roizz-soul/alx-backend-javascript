// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Class that implements director interface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from Home';
  }

  //Mistake here, the instruction says getToWork instead
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

// class that implements the teacher interface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from Home';
  }

  //Mistake here, the instruction says getToWork instead
  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

// A function to create employees
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function to check if Director
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

// Function to get the tasks
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

// function to teach class
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
