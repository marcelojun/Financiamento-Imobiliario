import { Component, OnInit } from "@angular/core";
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

    print(): void {
        let printContents, popupWin;
        printContents = document?.getElementById('print-section')?.innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin?.document.open();
        popupWin?.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <style>
              #print-section {
                margin-left: 2rem;
            }
            
            .mt-2 {
                font-weight: 800;
                text-decoration: underline;
            }
            
            .text-success {
                margin-left: 27rem;
            }
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin?.document.close();
    }
}