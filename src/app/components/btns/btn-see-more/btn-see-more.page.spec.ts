import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnSeeMorePage } from './btn-see-more.page';

describe('BtnSeeMorePage', () => {
  let component: BtnSeeMorePage;
  let fixture: ComponentFixture<BtnSeeMorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSeeMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
