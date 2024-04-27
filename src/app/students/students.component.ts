import { Component } from '@angular/core';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  text = 'Sleeping.';
  // we have a mixture of undergrad and postgrad students
  students = [
    { name: 'John', level: 'undergrad' },
    { name: 'Jane', level: 'postgrad' },
    { name: 'Jim', level: 'undergrad' },
  ];
  // we can call functions before creating them like this, becvause when javascript renders the code, the functions will be MOVED to the top.
  public undergradStudents = this.getUndergradStudents();
  // get undergrad students
  getUndergradStudents() {
    // return new array of students based on level property conditional check
    return this.students.filter((student) => student.level === 'undergrad');
  }

  // delete student
  deleteStudent(studentName: string) {
    // findIndex will return the index of the student matching the studentName OR -1 if not found
    let index = this.students.findIndex(
      (student) => student.name === studentName
    );
    this.students.splice(
      index, // find the index of the student to delete based on name
      1 // delete one instance
    );
    this.undergradStudents = this.getUndergradStudents();
  }
}
