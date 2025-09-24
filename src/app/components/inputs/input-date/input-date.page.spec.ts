import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDatePage } from './input-date.page';

describe('InputDatePage', () => {
  let component: InputDatePage;
  let fixture: ComponentFixture<InputDatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
