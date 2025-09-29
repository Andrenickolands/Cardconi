import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnSecundaryLoginPage } from './btn-secundary-login.page';

describe('BtnSecundaryLoginPage', () => {
  let component: BtnSecundaryLoginPage;
  let fixture: ComponentFixture<BtnSecundaryLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecundaryLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
