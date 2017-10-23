import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersListComponent } from './photographers-list.component';

describe('PhotographersListComponent', () => {
  let component: PhotographersListComponent;
  let fixture: ComponentFixture<PhotographersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
