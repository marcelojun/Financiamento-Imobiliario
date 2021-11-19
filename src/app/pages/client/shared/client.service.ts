import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './client.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    static model: Cliente;

    constructor(private http: HttpClient) { }

    SalvarDado(model: Cliente){
        ClientService.model = model;
    }

    RecuperarDado() : Cliente{
        return ClientService.model;
    }
}