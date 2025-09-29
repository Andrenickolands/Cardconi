import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnCtaPage } from './btn-cta.page';

describe('BtnCtaPage', () => {
  let component: BtnCtaPage;
  let fixture: ComponentFixture<BtnCtaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
