import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentAdminComponent } from './government-admin.component';

describe('GovernmentAdminComponent', () => {
  let component: GovernmentAdminComponent;
  let fixture: ComponentFixture<GovernmentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovernmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
