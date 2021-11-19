import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proposta } from './proposta.model';
import { ApprovedModel } from '../../../approved/approved.form/shared/approvedModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RealtyService {
  baseUrl = "http://localhost:3001/Proposta"

  static model: ApprovedModel;

  constructor(private http: HttpClient) { }

  enviaDados(dados: ApprovedModel) {
    RealtyService.model = dados;
  }

  recuperaDados(): ApprovedModel {
    return RealtyService.model;
  }

  salvarDados(proposta: Proposta) {
    console.log(Proposta)
    return this.http.post<Proposta>(this.baseUrl, proposta).subscribe(response => console.log(response));
  }
  mostrarDados(): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(this.baseUrl)
  }
  deletaDados(id:number) {
    var urlDel= this.baseUrl + `/${id}`
    console.log(urlDel)
    return this.http.delete(urlDel);
  }
}