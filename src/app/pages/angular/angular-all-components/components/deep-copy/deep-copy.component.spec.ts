/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepCopyComponent } from './deep-copy.component';

describe('DeepCopyComponent', () => {
  let component: DeepCopyComponent;
  let fixture: ComponentFixture<DeepCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
