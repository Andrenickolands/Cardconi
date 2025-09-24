import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnPlusPage } from './btn-plus.page';

describe('BtnPlusPage', () => {
  let component: BtnPlusPage;
  let fixture: ComponentFixture<BtnPlusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
