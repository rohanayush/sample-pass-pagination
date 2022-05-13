import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPhotoComponent } from './pagination-photo.component';

describe('PaginationPhotoComponent', () => {
  let component: PaginationPhotoComponent;
  let fixture: ComponentFixture<PaginationPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
