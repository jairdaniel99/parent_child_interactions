import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  // define API endpoint for school data
  _schoolUrl = 'http://localhost:3000';
  // use dependency injection to inject an instance of HttpClient
  constructor(private http: HttpClient) {}

  // get students data from the API, we can specify the sreponse type as Student[] using generic types
  // generic types are when you use open angle brackets <> to specify the type of data you are working with
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this._schoolUrl + '/students');
  }

  // delete student from the API
  deleteStudent(id: number): Observable<Student[]> {
    // <Student[]> is the generic type for the delete method specifying what we expect the response to be
    return this.http.delete<Student[]>(this._schoolUrl + '/students/' + id);
  }
}
