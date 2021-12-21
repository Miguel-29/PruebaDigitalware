import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPilotComponent } from './register-pilot.component';

describe('RegisterPilotComponent', () => {
  let component: RegisterPilotComponent;
  let fixture: ComponentFixture<RegisterPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
