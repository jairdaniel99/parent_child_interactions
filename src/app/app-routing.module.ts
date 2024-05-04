import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { StudentInfoComponent } from './student-info/student-info.component';

const routes: Routes = [
  { path: 'students/:id', component: StudentInfoComponent },
  { path: 'students', component: StudentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
