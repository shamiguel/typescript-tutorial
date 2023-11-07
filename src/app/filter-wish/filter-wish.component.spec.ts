import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWishComponent } from './filter-wish.component';

describe('FilterWishComponent', () => {
  let component: FilterWishComponent;
  let fixture: ComponentFixture<FilterWishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterWishComponent]
    });
    fixture = TestBed.createComponent(FilterWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
