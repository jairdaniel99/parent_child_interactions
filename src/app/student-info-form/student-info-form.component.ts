import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'student-info-form',
  templateUrl: './student-info-form.component.html',
  styleUrl: './student-info-form.component.css',
})
export class StudentInfoFormComponent {
  reactiveForm!: FormGroup;
  @Input() formStudent: any;
  constructor(
    private formBuilderInstance: FormBuilder,
    private schoolService: SchoolService
  ) {}
  ngOnInit(): void {
    this.reactiveForm = this.formBuilderInstance.group({
      name: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      age: ['', [Validators.required]],
      level: ['', [Validators.required]],
    });
  }

  ngOnChanges() {
    this.updateForm();
  }

  updateForm() {
    this.reactiveForm.patchValue({
      name: this.formStudent.name ?? '',
      grade: this.formStudent.grade ?? '',
      age: this.formStudent.age ?? '',
      level: this.formStudent.level ?? '',
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
      // if we have a formStudent, we are updating an existing student
      if (this.formStudent) {
        console.log('Form updated!');
        // update student data using API
        this.schoolService
          .putStudents(this.formStudent.id, this.reactiveForm.value)
          .subscribe(
            (response) => {
              console.log('Student updated successfully: ', response);
              this.formStudent = response;
            },
            (error) => console.log('Error: ', error)
          );
      } else {
        // submit form data using API
        console.log('Form submitted!');

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
}
