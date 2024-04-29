import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { UndergradsComponent } from './undergrads/undergrads.component';
import { HomeComponent } from './home/home.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentInfoFormComponent } from './student-info-form/student-info-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    UndergradsComponent,
    HomeComponent,
    StudentInfoComponent,
    StudentInfoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
