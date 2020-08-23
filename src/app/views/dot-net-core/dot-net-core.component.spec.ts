import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreComponent } from './dot-net-core.component';

describe('DotNetCoreComponent', () => {
  let component: DotNetCoreComponent;
  let fixture: ComponentFixture<DotNetCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotNetCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
