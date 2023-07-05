import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRegistroComponent } from './new-registro.component';
import { FirebaseService } from '../firebase.service';

describe('NewRegistroComponent', () => {
  let component: NewRegistroComponent;
  let fixture: ComponentFixture<NewRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistroComponent]
    });
    fixture = TestBed.createComponent(NewRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
