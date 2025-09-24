import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnFloatingPage } from './btn-floating.page';

describe('BtnFloatingPage', () => {
  let component: BtnFloatingPage;
  let fixture: ComponentFixture<BtnFloatingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFloatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
