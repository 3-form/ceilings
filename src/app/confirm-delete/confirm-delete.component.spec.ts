import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteComponent } from './confirm-delete.component';

describe('ConfirmDeleteComponent', () => {
  let component: ConfirmDeleteComponent;
  let fixture: ComponentFixture<ConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
