import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDropdownCheckboxPage } from './input-dropdown-checkbox.page';

describe('InputDropdownCheckboxPage', () => {
  let component: InputDropdownCheckboxPage;
  let fixture: ComponentFixture<InputDropdownCheckboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDropdownCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
