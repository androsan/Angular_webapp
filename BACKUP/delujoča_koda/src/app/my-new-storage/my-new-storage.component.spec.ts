import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewStorageComponent } from './my-new-storage.component';

describe('MyNewStorageComponent', () => {
  let component: MyNewStorageComponent;
  let fixture: ComponentFixture<MyNewStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNewStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
