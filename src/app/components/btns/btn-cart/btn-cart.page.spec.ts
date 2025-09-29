import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnCartPage } from './btn-cart.page';

describe('BtnCartPage', () => {
  let component: BtnCartPage;
  let fixture: ComponentFixture<BtnCartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
