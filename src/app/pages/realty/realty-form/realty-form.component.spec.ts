import { ClientService } from './../../client/shared/client.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { RealtyFormComponent } from './realty-form.component';
import { RealtyService } from './shared/realty.service';


describe('RealtyFormComponent', () => {
  let component: RealtyFormComponent;
  let fixture: ComponentFixture<RealtyFormComponent>;

  const spyClientService = jasmine.createSpyObj("ClientService", [
    "RecuperarDado"
  ]);

  const spyRouter = jasmine.createSpyObj("spyRouter", [
    "navigate"
  ]);

  const spyRealtyService = jasmine.createSpyObj("spyRealtyService", [
    "enviaDados"
  ]);
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyFormComponent ],
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: Router, useValue: spyRouter },
        { provide: RealtyService, useValue: spyRealtyService },
        { provide: ClientService, useValue: spyClientService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('testar o metodo validarDados valor entrada ok', () => {    
    //Arrange  
    spyClientService.RecuperarDado.and.returnValue({
      nome: "nome",
      profissao:"profissao",
      cpf: "888888888",
      email:'email',
      nascimento: new Date(2000,1,1),
      celular:"celular",
      cidade:"cidade",
      estado:"estado",
      cep:999999999

    });
    component.formr.controls["renda"].setValue("R$ 3.200,00");
    component.formr.controls["valor"].setValue("R$ 100.000,00");
    component.formr.controls["entrada"].setValue("R$ 20.000,00");
    component.formr.controls["parcelas"].setValue("360");    

    //Act
    component.validarDados();

    //Assert
    expect(component.mensagem).toEqual("");
  });

  xit('testar o metodo validarDados valor entrada nao ok', () => {    
    //Arrange    
    spyClientService.RecuperarDado.and.returnValue({
      nome: "nome",
      profissao:"profissao",
      cpf: "888888888",
      email:'email',
      nascimento: new Date(2000,1,1),
      celular:"celular",
      cidade:"cidade",
      estado:"estado",
      cep:999999999,
    }),
    component.formr.controls["renda"].setValue("R$ 3.200,00");
    component.formr.controls["valor"].setValue("R$ 100.000,00");
    component.formr.controls["entrada"].setValue("R$ 10.000,00");
    component.formr.controls["parcelas"].setValue("360");

    //Act
    component.validaValorEntrada();

    //Assert
    expect(component.mensagem).toEqual("O valor da entrada não pode ser inferior a 20% do valor total do imóvel");
  });
  
});