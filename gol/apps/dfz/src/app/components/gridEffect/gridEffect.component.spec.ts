/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridEffectComponent } from './gridEffect.component';

describe('GridEffectComponent', () => {
  let component: GridEffectComponent;
  let fixture: ComponentFixture<GridEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
