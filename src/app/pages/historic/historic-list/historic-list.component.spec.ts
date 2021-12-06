import { Proposta } from './../../realty/realty-form/shared/proposta.model';
import { HistoricViewComponent } from './../historic-view/historic-view.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RealtyService } from './../../realty/realty-form/shared/realty.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricListComponent } from './historic-list.component';
import { of } from 'rxjs';
import { mockProposta } from '../mock/historic-mock';

describe('HistoricListComponent', () => {
  let component: HistoricListComponent;
  let fixture: ComponentFixture<HistoricListComponent>;
  let mockRealtyService:jasmine.SpyObj<RealtyService>
  let mockNgbModal: jasmine.SpyObj<NgbModal>

 

  beforeEach(async () => {
    //mockar chamada do ngOninit
    mockRealtyService= jasmine.createSpyObj('RealtyService',['mostrarDados','deletaDados','enviaHistoric']);
    mockNgbModal= jasmine.createSpyObj('NgbModal',['Open']);
    component= new  HistoricListComponent(mockRealtyService,mockNgbModal)

    mockRealtyService.mostrarDados.and.returnValue(of([mockProposta]))

    TestBed.configureTestingModule({
      declarations: [ HistoricListComponent ],
      imports:[HttpClientModule,
      HttpClientModule],
      providers:[
        {provide:RealtyService, useValue:mockRealtyService},
        {provide:NgbModal, useValue:mockNgbModal}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve deletar',()=>{
    mockRealtyService.deletaDados.and.returnValue(of(true));
    component.listaHistorico= [mockProposta];
    component.delete(2)

    expect(component.listaHistorico.length).toBe(1)
  })
  xit('Deve abrir OpenView', ()=>{
    mockRealtyService.enviaHistoric(mockProposta);
    mockNgbModal.open(HistoricViewComponent);
    component.openView(mockProposta)
    expect(mockRealtyService.enviaHistoric).toHaveBeenCalled()
 
   })
  
 
   
  

});
