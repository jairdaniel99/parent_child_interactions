import { Component } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { Student } from '../models/student';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  // we have a mixture of undergrad and postgrad students
  text: undefined | string;
  students: Student[] = [];
  undergradStudents: Student[] = [];
  // get instance of SchoolService using dependency injection
  constructor(private schoolService: SchoolService) {}
  ngOnInit() {
    console.log('ngOnInit: StudentsComponent is initialized');

    // get students data from the API
    this.schoolService.getStudents().subscribe((response) => {
      // update students array with the response data
      this.students = response;
      this.undergradStudents = this.getUndergradStudents();
      console.log('Students data: ', this.students);
    });
  }
  // get undergrad students
  getUndergradStudents() {
    // return new array of students based on level property conditional check
    return this.students.filter((student) => student.level === 'undergrad');
  }

  // delete student
  deleteStudent(studentId: number) {
    // findIndex will return the index of the student matching the studentName OR -1 if not found
    let index = this.students.findIndex((student) => student.id === studentId);

    if (index === -1) {
      return;
    }

    // delete student from the API
    this.schoolService.deleteStudent(studentId).subscribe(
      (response) => {
        // remove students from student array
        this.students.splice(index, 1);

        // update students array with students data
        this.undergradStudents = this.getUndergradStudents();
      },
      (error) => console.log('Error:', error)
    );
  }
}
