import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMascotasPage } from './form-mascotas.page';

describe('FormMascotasPage', () => {
  let component: FormMascotasPage;
  let fixture: ComponentFixture<FormMascotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMascotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
