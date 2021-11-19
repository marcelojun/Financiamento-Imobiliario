import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealtyFormComponent } from './realty-form/realty-form.component';

const routes: Routes = [
  {
    path: "", component: RealtyFormComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtyRoutingModule { }
