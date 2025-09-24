import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnSecundaryPage } from './btn-secundary.page';

describe('BtnSecundaryPage', () => {
  let component: BtnSecundaryPage;
  let fixture: ComponentFixture<BtnSecundaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecundaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
