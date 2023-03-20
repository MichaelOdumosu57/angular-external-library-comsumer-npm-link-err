import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMyLibComponent } from './error-my-lib.component';

describe('ErrorMyLibComponent', () => {
  let component: ErrorMyLibComponent;
  let fixture: ComponentFixture<ErrorMyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
