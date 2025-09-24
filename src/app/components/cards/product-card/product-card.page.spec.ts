import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardPage } from './product-card.page';

describe('ProductCardPage', () => {
  let component: ProductCardPage;
  let fixture: ComponentFixture<ProductCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
