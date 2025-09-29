import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnPrimaryPage } from './btn-primary.page';

describe('BtnPrimaryPage', () => {
  let component: BtnPrimaryPage;
  let fixture: ComponentFixture<BtnPrimaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
