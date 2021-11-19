import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricListComponent } from './historic-list/historic-list.component';


@NgModule({
  declarations: [
    HistoricListComponent
  ],
  imports: [
    CommonModule,
    HistoricRoutingModule
  ]
})
export class HistoricModule { }
