import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDropdownColorsPage } from './input-dropdown-colors.page';

describe('InputDropdownColorsPage', () => {
  let component: InputDropdownColorsPage;
  let fixture: ComponentFixture<InputDropdownColorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDropdownColorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
