import { ClientService } from './../shared/client.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { ClientFormComponent } from './client-form.component';



describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;
  
  const spyClientService = jasmine.createSpyObj("ClientService", ["SalvarDado"]);
  //const spyRouter = jasmine.createSpyObj("Router", ["navigateByUrl"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        RouterTestingModule
      ],
      providers: [
        FormBuilder,
        { provide: ClientService, useValue: spyClientService },
       
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shoud create',()=>{
    expect(component).toBeTruthy();
  });

 
  
});
