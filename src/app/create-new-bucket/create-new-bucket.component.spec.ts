import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBucketComponent } from './create-new-bucket.component';

describe('CreateNewBucketComponent', () => {
  let component: CreateNewBucketComponent;
  let fixture: ComponentFixture<CreateNewBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewBucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
