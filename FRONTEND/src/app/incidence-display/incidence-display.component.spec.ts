import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceDisplayComponent } from './incidence-display.component';

describe('IncidenceDisplayComponent', () => {
  let component: IncidenceDisplayComponent;
  let fixture: ComponentFixture<IncidenceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenceDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
