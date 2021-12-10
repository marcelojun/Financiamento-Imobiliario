


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApprovedModel } from 'src/app/pages/approved/approved.form/shared/approvedModel';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Proposta } from './proposta.model';

import { RealtyService } from './realty.service';
import { mockProposta } from 'src/app/pages/historic/mock/historic-mock';
import { of } from 'rxjs';

describe('RealtyService', () => {
  let mocksrv: jasmine.SpyObj<RealtyService>;
  let srv: RealtyService;
  let httpServiceMock: jasmine.SpyObj<HttpClient>;
  let mockHttp: HttpTestingController
 

  beforeEach(() => {
    httpServiceMock= jasmine.createSpyObj('HttpClient',['get','delete']);
    
    

    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        HttpClientTestingModule],
        providers:[
          RealtyService,
          {provide: HttpClient, useValue: httpServiceMock}
        ]
    });
    srv = TestBed.inject(RealtyService);
    mockHttp= TestBed.inject(HttpTestingController)
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

  it('should be created', () => {
    const service:RealtyService = TestBed.inject(RealtyService);
    expect(service).toBeTruthy();
   });

  it('should MostrarDados',()=>{
     httpServiceMock.get.and.returnValue(of(mockProposta))

     srv.mostrarDados().subscribe({
       next:(response:Proposta[])=>{
          expect(mocksrv.mostrarDados).toHaveBeenCalled()
       }
     })  
   });

   it('should delete',()=>{
    srv.baseUrl= 'teste';
    srv.deletaDados(2);
    expect(httpServiceMock.delete).toHaveBeenCalledWith('teste/2');
         
   })

})
