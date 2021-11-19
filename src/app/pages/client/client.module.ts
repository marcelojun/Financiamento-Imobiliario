import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';





@NgModule({
  declarations: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()   
   
  ]
    
})
export class ClientModule { }
