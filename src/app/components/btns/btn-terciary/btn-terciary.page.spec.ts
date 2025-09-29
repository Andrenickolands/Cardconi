import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnTerciaryPage } from './btn-terciary.page';

describe('BtnTerciaryPage', () => {
  let component: BtnTerciaryPage;
  let fixture: ComponentFixture<BtnTerciaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnTerciaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
