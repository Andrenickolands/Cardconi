import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootersPage } from './footers.page';

describe('FootersPage', () => {
  let component: FootersPage;
  let fixture: ComponentFixture<FootersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
