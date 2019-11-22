import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail03HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: Detail03HomeComponent;
  let fixture: ComponentFixture<Detail03HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Detail03HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail03HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
