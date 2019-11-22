import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail01HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: Detail01HomeComponent;
  let fixture: ComponentFixture<Detail01HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Detail01HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail01HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
