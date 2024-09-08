import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoliciAutoPage } from './solici-auto.page';

describe('SoliciAutoPage', () => {
  let component: SoliciAutoPage;
  let fixture: ComponentFixture<SoliciAutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliciAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
