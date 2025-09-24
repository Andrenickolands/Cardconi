import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadersPage } from './headers.page';

describe('HeadersPage', () => {
  let component: HeadersPage;
  let fixture: ComponentFixture<HeadersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
