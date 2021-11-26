import { RealtyService } from './../../realty/realty-form/shared/realty.service';
import { HistoricViewComponent } from './historic-view.component';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('historic View Component',()=>{
    let component: HistoricViewComponent;
    let fixture: ComponentFixture<HistoricViewComponent>;

    const spyRealtyService = jasmine.createSpyObj('RealtyService', ["recuperaHistoric"]);

    beforeEach(() => {
      
      fixture = TestBed.createComponent(HistoricViewComponent);
      fixture.detectChanges();

        TestBed.configureTestingModule({
          declarations: [HistoricViewComponent],
          imports: [
            HttpClientModule,
            RouterModule.forRoot([]),
            RouterTestingModule
          ],
          providers: [
            { provide: RealtyService, useValue: spyRealtyService },
          ],
          
         })    
  })
  
       
});