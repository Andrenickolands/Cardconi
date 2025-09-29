import { ComponentFixture, TestBed } from '@angular/core/testing';
import { 500Page } from './500.page';

describe('500Page', () => {
  let component: 500Page;
  let fixture: ComponentFixture<500Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(500Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
