import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { View } from '../../Models/viewModel';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { viewsSelector } from '../State/Selectors/views.selector';
import { ViewsActions } from '../State/Actions/views.actions';

@Component({
  selector: 'app-views-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './views-display.component.html',
  styleUrl: './views-display.component.css'
})
export class ViewsDisplayComponent implements OnInit {
  // views: View[] = []
  views$=this.store.select(viewsSelector)

  constructor(private store:Store<AppState>){}

ngOnInit(): void {
  this.store.dispatch(ViewsActions.getViews())
}
}
