import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtCompComponent } from './txt-comp.component';

describe('TxtCompComponent', () => {
  let component: TxtCompComponent;
  let fixture: ComponentFixture<TxtCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
