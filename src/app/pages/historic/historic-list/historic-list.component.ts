import { Proposta } from './../../realty/realty-form/shared/proposta.model';
import { RealtyService } from './../../realty/realty-form/shared/realty.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoricViewComponent } from '../historic-view/historic-view.component';

@Component({
  selector: 'app-historic-list',
  templateUrl: './historic-list.component.html',
  styleUrls: ['./historic-list.component.css']
})
export class HistoricListComponent implements OnInit {
  public listaHistorico!: Proposta[];
  private closeResult!: string;

  constructor(private rs: RealtyService, private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.rs.mostrarDados().subscribe(response => {
      this.listaHistorico = response
    })
  }

  delete(id: number) {
    this.rs.deletaDados(id).subscribe(response => {
      this.listaHistorico = this.listaHistorico.filter(item => item.id !== id);
    });
  }

  openDelete(content: any, id: number) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result == "OK") this.delete(id);
    });
  }

  openView(item:Proposta) {
    this.rs.enviaHistoric(item);

    this.modalService.open(HistoricViewComponent);
  }
}
