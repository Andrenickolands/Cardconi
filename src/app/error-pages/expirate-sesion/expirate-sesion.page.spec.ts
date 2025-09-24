import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpirateSesionPage } from './expirate-sesion.page';

describe('ExpirateSesionPage', () => {
  let component: ExpirateSesionPage;
  let fixture: ComponentFixture<ExpirateSesionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirateSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
