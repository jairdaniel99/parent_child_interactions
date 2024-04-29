import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'student-info-form',
  templateUrl: './student-info-form.component.html',
  styleUrl: './student-info-form.component.css',
})
export class StudentInfoFormComponent {
  reactiveForm!: FormGroup;
  constructor(
    private formBuilderInstance: FormBuilder,
    private schoolService: SchoolService
  ) {
    this.reactiveForm = formBuilderInstance.group({
      name: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      age: ['', [Validators.required]],
      level: ['', [Validators.required]],
    });
  }

  get name() {
    return this.reactiveForm.get('name');
  }
  get grade() {
    return this.reactiveForm.get('grade');
  }
  get age() {
    return this.reactiveForm.get('age');
  }
  get level() {
    return this.reactiveForm.get('level');
  }

  onSubmit() {
    if (!this.reactiveForm.valid) {
      console.log('Invalid Form');
    } else {
      // submit form data using API
      console.log(this.reactiveForm.value);
      this.schoolService.postStudents(this.reactiveForm.value).subscribe(
        (response) => {
          console.log('Student added successfully: ', response);
          this.reactiveForm.reset();
        },
        (error) => console.log('Error: ', error)
      );
    }
  }
}
