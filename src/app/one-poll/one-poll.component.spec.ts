import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePollComponent } from './one-poll.component';

describe('OnePollComponent', () => {
  let component: OnePollComponent;
  let fixture: ComponentFixture<OnePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
