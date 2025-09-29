import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTelPage } from './input-tel.page';

describe('InputTelPage', () => {
  let component: InputTelPage;
  let fixture: ComponentFixture<InputTelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
