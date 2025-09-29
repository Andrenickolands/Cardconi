import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputEmailPage } from './input-email.page';

describe('InputEmailPage', () => {
  let component: InputEmailPage;
  let fixture: ComponentFixture<InputEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
