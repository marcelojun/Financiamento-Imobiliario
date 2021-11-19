import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeniedFormComponent } from './denied.form/denied-form.component';

const routes: Routes = [
  {path:"", component:DeniedFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeniedRoutingModule { }
