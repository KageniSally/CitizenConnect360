import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDisplayComponent } from './views-display.component';

describe('ViewsDisplayComponent', () => {
  let component: ViewsDisplayComponent;
  let fixture: ComponentFixture<ViewsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
