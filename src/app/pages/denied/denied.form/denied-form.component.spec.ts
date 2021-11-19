import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedFormComponent } from './denied-form.component';

describe('DeniedFormComponent', () => {
  let component: DeniedFormComponent;
  let fixture: ComponentFixture<DeniedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeniedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
