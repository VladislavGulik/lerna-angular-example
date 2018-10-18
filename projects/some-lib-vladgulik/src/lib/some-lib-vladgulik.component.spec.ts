import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeLibVladgulikComponent } from './some-lib-vladgulik.component';

describe('SomeLibVladgulikComponent', () => {
  let component: SomeLibVladgulikComponent;
  let fixture: ComponentFixture<SomeLibVladgulikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeLibVladgulikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeLibVladgulikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
