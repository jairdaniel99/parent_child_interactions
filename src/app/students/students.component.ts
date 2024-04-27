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
}
