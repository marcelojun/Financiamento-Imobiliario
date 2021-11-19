import { RealtyService } from './../../realty/realty-form/shared/realty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved-form',
  templateUrl: './approved-form.component.html',
  styleUrls: ['./approved-form.component.css']
})

export class ApprovedFormComponent implements OnInit {
  ApprovedForm: any;
  ApprovedFormComponent: any;
  
  valorInicialParcela!: string;
  valorTotalFinanciado!: string;
  RealtyService: any;

  constructor() {
  }

  ngOnInit(): void {
    this.valorInicialParcela = RealtyService.model.valorParcela.toLocaleString('pt-BR');
    this.valorTotalFinanciado = RealtyService.model.valorTotal.toLocaleString('pt-BR');
  }
}
