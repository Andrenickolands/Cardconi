import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnPrimaryLoginPage } from './btn-primary-login.page';

describe('BtnPrimaryLoginPage', () => {
  let component: BtnPrimaryLoginPage;
  let fixture: ComponentFixture<BtnPrimaryLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimaryLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
