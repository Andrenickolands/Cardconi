import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventaryPage } from './inventary.page';

describe('InventaryPage', () => {
  let component: InventaryPage;
  let fixture: ComponentFixture<InventaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
