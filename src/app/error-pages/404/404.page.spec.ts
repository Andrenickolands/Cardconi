import { ComponentFixture, TestBed } from '@angular/core/testing';
import { 404Page } from './404.page';

describe('404Page', () => {
  let component: 404Page;
  let fixture: ComponentFixture<404Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
