import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css',
})
export class StudentInfoComponent implements OnInit {
  name: undefined | string | null;
  // grab an instance of the activated route for usage using independency injection
  constructor(private route: ActivatedRoute) {
    // get route parameter in ngOnInit lifecycle hook
  }
  //get name parameter from route
  //paramMap is an observable that contains the route parameters
  // observable returns a set of values over time asynchronously
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      console.log(params.get('name'));
    });
  }
}
