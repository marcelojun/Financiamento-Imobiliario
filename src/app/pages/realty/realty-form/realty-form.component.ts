
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Proposta } from './shared/proposta.model';
import { RealtyValidacoes } from './realty-validacoes';
import { RealtyService } from './shared/realty.service';
import { ClientService } from './../../client/shared/client.service';
import { ApprovedModel } from '../../approved/approved.form/shared/approvedModel';



@Component({
  selector: 'app-realty-form',
  templateUrl: './realty-form.component.html',
  styleUrls: ['./realty-form.component.css'],
  providers: [RealtyService,ClientService ]
})

export class RealtyFormComponent implements OnInit {
  
  private router!: Router;
  public mensagem!: string;
  public formr!: FormGroup;
  public rendaMensal!: number;
  public valorImovel!: number;
  public valorEntrada!: number;
  public quantidadeParcelas!: number;
  public erroParcela: string = "Valor da parcela acima dos 30% da renda mensal!"
  private aprovado!: ApprovedModel;
  private rs: RealtyService;
  private primeira_parcela! : number;
  private valorFinanciado!: number;

  constructor(private fb: FormBuilder, private routerInject: Router, realtyService: RealtyService, private clienteService: ClientService) {
    this.router = this.routerInject;
    this.rs = realtyService;
  }

  ngOnInit(): void {
    this.criarFormr();
  }

  criarFormr() {
    this.formr = this.fb.group({
      imovel: [null, [Validators.required]],
      renda: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      entrada: [null, [Validators.required]],
      parcelas: [null, [Validators.required, RealtyValidacoes.QuantidadeParcelas]],
    });

    this.formr.controls['renda'].valueChanges.subscribe(value => this.rendaMensal = value.replace(/^\D+/g, ''));
    this.formr.controls['valor'].valueChanges.subscribe(value => this.valorImovel = value.replace(/^\D+/g, ''));
    this.formr.controls['entrada'].valueChanges.subscribe(value => this.valorEntrada = value.replace(/^\D+/g, ''));
    this.formr.controls['parcelas'].valueChanges.subscribe(value => this.quantidadeParcelas = value.replace(/^\D+/g, ''));
  }

  validarDados() {
    const form = this.formr!.value;
    const cliente = this.clienteService.RecuperarDado();
    let valido: boolean = true;
    this.mensagem = "";
    this.validaValorEntrada();

    if (this.mensagem != null && this.mensagem != undefined && this.mensagem != "")
      return;

    valido = this.validaPrestacao();

    //criar modelo para salvar
    
    var proposta = new Proposta(
      form.imovel,
      form.renda, 
      form.valor, 
      form.entrada, 
      form.parcelas,
      this.primeira_parcela,
      valido? 'Aprovado': 'Reprovado',
      this.valorFinanciado,
      cliente.nome,
      cliente.profissao,
      cliente.cpf,
      cliente.email,
      cliente.nascimento,
      cliente.celular,
      cliente.cidade,
      cliente.estado,
      cliente.cep
      );
      
      this.rs.salvarDados(proposta);
      
          
    // chamar o servico de cliente e pegar os dados do cliente
    // instanciar um modelo do tipo proposta
    // vai fazer um post num dos servicos...

    if (valido) this.encaminhoAprovado();
    else this.encaminhaReprovado();
  }

  validaPrestacao(): boolean {
    let valorImovelConv = Number(this.valorImovel.toLocaleString('pt-BR').replace('.', ''));
    let valorEntradaConv = Number(this.valorEntrada.toLocaleString('pt-BR').replace('.', ''));
    let valorRendaConv = Number(this.rendaMensal.toLocaleString('pt-BR').replace('.', ''));

    this.valorFinanciado = (valorImovelConv - valorEntradaConv);
    this.primeira_parcela = (this.valorFinanciado / this.quantidadeParcelas) + (this.valorFinanciado * 0.0062);

    if (this.primeira_parcela >= valorRendaConv * 0.3) {
      return false;
    }

    this.aprovado = new ApprovedModel(this.primeira_parcela, this.valorFinanciado);
    return true;
  }

  validaValorEntrada() {
    if (this.valorImovel * 0.2 > this.valorEntrada) this.mensagem = "O valor da entrada não pode ser inferior a 20% do valor total do imóvel"
  }

  encaminhoAprovado() {
    var cliente = this.clienteService.RecuperarDado();
    this.rs.enviaDados(this.aprovado);

    this.router.navigate(['/approved']);
  }

  encaminhaReprovado() {
    this.router.navigate(['/denied']);
  }

  get imovel() {
    return this.formr.get('imovel')
  }

  get renda() {
    return this.formr.get('renda');
  }

  get valor() {
    return this.formr.get('valor');
  }

  get entrada() {
    return this.formr.get('entrada');
  }

  get parcelas() {
    return this.formr.get('parcelas');
  }

}

// console.log('formr', this.formr.invalid);
    // console.log('imovel', this.imovel?.invalid);
    // console.log('renda', this.renda?.errors);
    // console.log('renda-pristine', this.renda?.pristine)
    //  console.log('teste1', this.teste1);
    // console.log('entrada', this.entrada?.errors);
    // console.log('parcelas', this.parcelas?.errors);