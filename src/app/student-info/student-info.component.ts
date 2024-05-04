import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../services/school.service';
@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css',
})
export class StudentInfoComponent implements OnInit {
  id: undefined | number | null;
  student: any;
  // grab an instance of the activated route for usage using independency injection
  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) {
    // get route parameter in ngOnInit lifecycle hook
  }
  //get id parameter from route
  //paramMap is an observable that contains the route parameters
  // observable returns a set of values over time asynchronously
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idAsAString = params.get('id');
      // +id is a shorthand tof converting string to number in JavaScript, long form is Number(id)
      this.id = idAsAString ? +idAsAString : null; // truthy or falsy ? 4 : null
    });
    // if id is set, get student data from the API
    if (this.id) {
      this.schoolService.getStudent(this.id).subscribe(
        (response) => {
          this.student = response;
          console.log('Student data: ', response);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
    }
  }
}
