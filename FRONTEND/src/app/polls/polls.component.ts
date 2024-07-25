import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Poll } from '../../Models/pollModel';
import { CommonModule } from '@angular/common';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { pollsSelector } from '../State/Selectors/polls.selector';
import { PollActions } from '../State/Actions/polls.actions';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent implements OnInit {
  // polls: Poll[] = [ ]
constructor(private store:Store<AppState>, public auth:AuthService){}

  polls$=this.store.select(pollsSelector)


ngOnInit(): void {
  this.store.dispatch(PollActions.getPolls())
}




}
