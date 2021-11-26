import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RealtyService } from '../../realty/realty-form/shared/realty.service';

import { ApprovedFormComponent } from './approved-form.component';
import { ApprovedModel } from './shared/approvedModel';

describe('ApprovedFormComponent', () => {
  let component: ApprovedFormComponent;
  let fixture: ComponentFixture<ApprovedFormComponent>;
  
  const spyRealtyService = jasmine.createSpyObj("RealtyService", [
    "model"
  ]);
  
  beforeEach(async () => {

    spyRealtyService.model.and.returnValue({
      valorParcela: 0.00,
      valorTotal: 0.00
    });

    await TestBed.configureTestingModule({
      declarations: [ ApprovedFormComponent ],
      providers: [
        { provide: RealtyService , useValue: spyRealtyService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
