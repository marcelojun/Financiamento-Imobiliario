import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricListComponent } from './historic-list/historic-list.component';
import { HistoricViewComponent } from './historic-view/historic-view.component';


@NgModule({
  declarations: [
    HistoricListComponent,
    HistoricViewComponent
  ],
  imports: [
    CommonModule,
    HistoricRoutingModule
  ]
})
export class HistoricModule { }
