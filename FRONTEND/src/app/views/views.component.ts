import { Component } from '@angular/core';
import { ViewsAddComponent } from '../views-add/views-add.component';
import { ViewsDisplayComponent } from '../views-display/views-display.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule, ViewsAddComponent,ViewsDisplayComponent,RouterModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {
  constructor(public auth:AuthService){}

}
