import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedFormComponent } from './approved.form/approved-form.component';

const routes: Routes = [
  {path:"", component:ApprovedFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedRoutingModule { }
