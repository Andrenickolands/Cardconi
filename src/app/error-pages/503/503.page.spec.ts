import { ComponentFixture, TestBed } from '@angular/core/testing';
import { 503Page } from './503.page';

describe('503Page', () => {
  let component: 503Page;
  let fixture: ComponentFixture<503Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(503Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
