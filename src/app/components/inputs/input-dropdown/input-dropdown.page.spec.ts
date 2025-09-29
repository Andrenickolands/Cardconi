import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDropdownPage } from './input-dropdown.page';

describe('InputDropdownPage', () => {
  let component: InputDropdownPage;
  let fixture: ComponentFixture<InputDropdownPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDropdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
