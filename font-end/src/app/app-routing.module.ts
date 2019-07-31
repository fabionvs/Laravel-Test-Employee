import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeShowComponent } from "./employee/employee-show/employee-show.component";


const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
