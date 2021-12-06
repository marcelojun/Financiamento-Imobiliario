import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask'
import { RealtyRoutingModule } from './realty-routing.module';
import { RealtyFormComponent } from './realty-form/realty-form.component';
import { DeniedFormComponent } from '../denied/denied.form/denied-form.component';
import { ApprovedFormComponent } from '../approved/approved.form/approved-form.component';


@NgModule({
  declarations: [
    RealtyFormComponent,
    ApprovedFormComponent,
    DeniedFormComponent
  ],
  imports: [
    CommonModule,
    RealtyRoutingModule,
    NgxMaskModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    
  ],
  providers:[
    
  ]

})
export class RealtyModule { }
