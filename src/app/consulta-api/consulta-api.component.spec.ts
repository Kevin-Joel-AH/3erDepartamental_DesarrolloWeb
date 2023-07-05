import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaApiComponent } from './consulta-api.component';

describe('ConsultaApiComponent', () => {
  let component: ConsultaApiComponent;
  let fixture: ComponentFixture<ConsultaApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaApiComponent]
    });
    fixture = TestBed.createComponent(ConsultaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
