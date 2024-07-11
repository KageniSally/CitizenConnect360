import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollAddComponent } from './poll-add.component';

describe('PollAddComponent', () => {
  let component: PollAddComponent;
  let fixture: ComponentFixture<PollAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
