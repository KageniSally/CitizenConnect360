import { Component } from '@angular/core';
import { ViewsAddComponent } from '../views-add/views-add.component';
import { ViewsDisplayComponent } from '../views-display/views-display.component';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [ViewsAddComponent,ViewsDisplayComponent],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {

}
