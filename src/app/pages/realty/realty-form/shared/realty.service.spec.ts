
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApprovedModel } from 'src/app/pages/approved/approved.form/shared/approvedModel';
import { Proposta } from './proposta.model';

import { RealtyService } from './realty.service';

describe('RealtyService', () => {
  let srv: RealtyService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    srv = TestBed.inject(RealtyService);
  });

  it('Teste enviaDados/recuperaDados', () => {
    //Arrange
    let dados: ApprovedModel = new ApprovedModel(2000, 80000);

    //Act
    srv.enviaDados(dados);
    let retorno = srv.recuperaDados();

    //Assert
    expect(retorno.valorParcela).toEqual(2000);
    expect(retorno.valorTotal).toEqual(80000);
  });

  it('Teste Envia Historico/Recupera Historico', () => {
    //Arrange
    let historic: Proposta = new Proposta(
      'residencial',
      '2500',
      10000,
      20000,
      360,
      500,
      'aprovado',
      80000,
      "Caio",
      'tec',
      '22084490880',
      'tec@tec.com',
      new Date(1979,1,1),
      99959013003,
      'Santo',
      'SP',
      9070250);
    
    //Act
    srv.enviaHistoric(historic);
    let retorn = srv.recuperaHistoric();

    //Assert
    expect(retorn.imovel).toEqual('residencial');
    expect(retorn.renda).toEqual('2500');
    expect(retorn.valor).toEqual(10000);
    expect(retorn.entrada).toEqual(20000);
    expect(retorn.parcelas).toEqual(360);
    expect(retorn.primeira_parcela).toEqual(500);
    expect(retorn.status).toEqual('aprovado');
    expect(retorn.valor_financiado).toEqual(80000);
    expect(retorn.nome).toEqual('Caio');
    expect(retorn.profissao).toEqual('tec');
    expect(retorn.cpf).toEqual('22084490880');
    expect(retorn.email).toEqual('tec@tec.com');
    expect(retorn.nascimento).toEqual(new Date(1979,1,1));
    expect(retorn.celular).toEqual(99959013003);
    expect(retorn.cidade).toEqual('Santo');
    expect(retorn.estado).toEqual('SP');
    expect(retorn.cep).toEqual(9070250);
  });
})
