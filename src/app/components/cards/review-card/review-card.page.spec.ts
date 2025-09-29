import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewCardPage } from './review-card.page';

describe('ReviewCardPage', () => {
  let component: ReviewCardPage;
  let fixture: ComponentFixture<ReviewCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
