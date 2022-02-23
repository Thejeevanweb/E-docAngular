import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DocumentComponent } from './admin/document/document.component';
import { DocumentsComponent } from './admin/documents/documents.component';

import { LoginComponent } from './login/login.component';
import { WordComponent } from './admin/word/word.component';
import { WordsComponent } from './admin/words/words.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { EmployeesComponent } from './admin/employees/employees.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"admin/document/:id",component:DocumentComponent},
  {path:"admin/documents",component:DocumentsComponent},
  {path:"admin/word/:id",component:WordComponent},
  {path:"admin/words",component:WordsComponent},
  {path:"admin/employee/:id",component:EmployeeComponent},
  {path:"admin/employees",component:EmployeesComponent},
  
  {path:"admin/topbar",component:TopbarComponent},
  

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }