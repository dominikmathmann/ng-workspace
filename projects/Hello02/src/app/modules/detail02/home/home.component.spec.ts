import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail02HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: Detail02HomeComponent;
  let fixture: ComponentFixture<Detail02HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Detail02HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail02HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
