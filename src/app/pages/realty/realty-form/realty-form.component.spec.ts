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
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyClientService.RecuperarDado.and.returnValue({
    
    })
  });

 



  xit('testar o metodo validarDados valor entrada ok', () => {    
    //Arrange    
    component.formr.controls["renda"].setValue("R$ 3.200,00");
    component.formr.controls["valor"].setValue("R$ 100.000,00");
    component.formr.controls["entrada"].setValue("R$ 20.000,00");
    component.formr.controls["parcelas"].setValue("360");    

    //Act
    component.validarDados();

    //Assert
    expect(component.mensagem).toEqual("");
  });

  xit('testar o metodo validarDados valor entrada nok', () => {    
    //Arrange    
    // component.formr.controls["renda"].setValue("R$ 3.200,00");
    component.formr.controls["valor"].setValue("R$ 100.000,00");
    component.formr.controls["entrada"].setValue("R$ 10.000,00");
    // component.formr.controls["parcelas"].setValue("360");

    //Act
    component.validaValorEntrada();

    //Assert
    expect(component.mensagem).toEqual("O valor da entrada não pode ser inferior a 20% do valor total do imóvel");
  });
  
});