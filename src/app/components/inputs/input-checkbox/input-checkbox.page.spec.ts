import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputCheckboxPage } from './input-checkbox.page';

describe('InputCheckboxPage', () => {
  let component: InputCheckboxPage;
  let fixture: ComponentFixture<InputCheckboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
