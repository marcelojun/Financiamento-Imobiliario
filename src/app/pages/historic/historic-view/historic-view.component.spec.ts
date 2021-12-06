import { mockProposta } from './../mock/historic-mock';
import { RealtyService } from './../../realty/realty-form/shared/realty.service';
import { HistoricViewComponent } from './historic-view.component';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('historic View Component',()=>{
    let component: HistoricViewComponent;
    let fixture: ComponentFixture<HistoricViewComponent>;

    const spyRealtyService = jasmine.createSpyObj('RealtyService', ["recuperaHistoric"]);
    spyRealtyService.recuperaHistoric.and.returnValue(mockProposta)

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [HistoricViewComponent],
          imports: [
            HttpClientModule,
            RouterTestingModule
          ],
          providers: [
            { provide: RealtyService, useValue: spyRealtyService },
          ],
          schemas:[CUSTOM_ELEMENTS_SCHEMA]
          
         })    
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(HistoricViewComponent);
    component= fixture.componentInstance;
    fixture.detectChanges()
  })

  it('shoud create',()=>{
    expect(component).toBeTruthy();
  });
  
       
});