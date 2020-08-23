import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsOfficeComponent } from './ms-office.component';

describe('MsOfficeComponent', () => {
  let component: MsOfficeComponent;
  let fixture: ComponentFixture<MsOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
