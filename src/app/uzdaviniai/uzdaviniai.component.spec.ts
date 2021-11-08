import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzdaviniaiComponent } from './uzdaviniai.component';

describe('UzdaviniaiComponent', () => {
  let component: UzdaviniaiComponent;
  let fixture: ComponentFixture<UzdaviniaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzdaviniaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UzdaviniaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
