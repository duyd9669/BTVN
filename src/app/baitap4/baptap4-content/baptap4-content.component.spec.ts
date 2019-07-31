import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baptap4ContentComponent } from './baptap4-content.component';

describe('Baptap4ContentComponent', () => {
  let component: Baptap4ContentComponent;
  let fixture: ComponentFixture<Baptap4ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baptap4ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baptap4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
