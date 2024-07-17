import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAddComponent } from './views-add.component';

describe('ViewsAddComponent', () => {
  let component: ViewsAddComponent;
  let fixture: ComponentFixture<ViewsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
