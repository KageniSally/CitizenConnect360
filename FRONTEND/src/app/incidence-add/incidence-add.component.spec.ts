import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceAddComponent } from './incidence-add.component';

describe('IncidenceAddComponent', () => {
  let component: IncidenceAddComponent;
  let fixture: ComponentFixture<IncidenceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
