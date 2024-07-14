import { Component } from '@angular/core';
import { ViewsAddComponent } from '../views-add/views-add.component';
import { ViewsDisplayComponent } from '../views-display/views-display.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [ViewsAddComponent,ViewsDisplayComponent,RouterModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {

}
