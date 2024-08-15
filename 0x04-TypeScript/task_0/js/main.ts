// The student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// two student objects
const studentA: Student = {
  firstName: "Daniel",
  lastName: "Wales",
  age: 25,
  location: "New York",
}

const studentB: Student = {
  firstName: "David",
  lastName: "Nyles",
  age: 26,
  location: "Chicago",
}

// Array foor students
const studentsList: Student[] = [studentA, studentB];

// Vanilla javascript
const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
