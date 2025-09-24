import { ComponentFixture, TestBed } from '@angular/core/testing';
import { 403Page } from './403.page';

describe('403Page', () => {
  let component: 403Page;
  let fixture: ComponentFixture<403Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(403Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
