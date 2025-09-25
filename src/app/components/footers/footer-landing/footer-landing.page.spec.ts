import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterLandingPage } from './footer-landing.page';

describe('FooterLandingPage', () => {
  let component: FooterLandingPage;
  let fixture: ComponentFixture<FooterLandingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
