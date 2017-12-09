import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoxComponent } from './app-box.component';

describe('AppBoxComponent', () => {
  let component: AppBoxComponent;
  let fixture: ComponentFixture<AppBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
