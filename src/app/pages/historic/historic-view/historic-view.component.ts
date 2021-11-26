import { Component, OnInit } from "@angular/core";
import * as printJS from "print-js";
import { Proposta } from "../../realty/realty-form/shared/proposta.model";
import { RealtyService } from "../../realty/realty-form/shared/realty.service";

@Component({
    selector: 'app-historic-view',
    templateUrl: './historic-view.component.html',
    styleUrls: ['./historic-view.component.css']
})

export class HistoricViewComponent implements OnInit {
    public historico!: Proposta;

    constructor(private rs: RealtyService) { }

    ngOnInit(): void {
        this.historico = this.rs.recuperaHistoric();
    }

    print(_printable:any,_type:any){
      printJS({printable:'print-sectionc',type:'html'})
    }
       
}