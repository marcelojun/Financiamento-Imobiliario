import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Validacoes } from './validacoes';
import { Cliente } from '../shared/client.model';
import { ClientService } from './../shared/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent implements OnInit {

  public form!: FormGroup;  

  constructor(private fb: FormBuilder, private srv: ClientService, private router:Router) {

  }

  ngOnInit(): void {
    this.criarFormu();
  }

  enviarDados() {
    const dadosFormulario = this.form!.value;

    const cliente = new Cliente(
      dadosFormulario.nome,
      dadosFormulario.profissao,
      dadosFormulario.cpf,
      dadosFormulario.email,
      dadosFormulario.nascimento,
      dadosFormulario.celular,
      dadosFormulario.cidade,
      dadosFormulario.estado,
      dadosFormulario.cep,
    );
    
    this.srv.SalvarDado(cliente);
    this.router.navigateByUrl('/realty')
  }

  criarFormu() {
    this.form = this.fb.group({

      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$')]],

      profissao: [null, [
        Validators.required,
        Validators.minLength(3)]],

      cpf: [null, [Validators.required]],

      email: [null, [Validators.email]],

      nascimento: [null, [Validators.required, Validacoes.MaiorQue18Anos]],

      celular: [null, [Validators.required]],

      cidade: [null, [
        Validators.required,
        Validators.minLength(3)]],

      estado: [null, [
        Validators.required,
        Validators.minLength(2)]],

      cep: [null, [Validators.required]]
    })
  }

  get nome() {
    return this.form.get('nome')
  }
  get profissao() {
    return this.form.get('profissao');
  }
  get cpf() {
    return this.form.get('cpf');
  }
  get email() {
    return this.form.get('email');
  }
  get nascimento() {
    return this.form.get('nascimento');
  }
  get celular() {
    return this.form.get('celular');
  }
  get cidade() {
    return this.form.get('cidade');
  }
  get estado() {
    return this.form.get('estado');
  }
  get cep() {
    return this.form.get('cep');
  }
}
