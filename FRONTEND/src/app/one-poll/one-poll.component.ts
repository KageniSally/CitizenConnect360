import { Component, OnInit } from '@angular/core';
import { onePoll, Poll } from '../../Models/pollModel';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { specificPollSelector } from '../State/Selectors/polls.selector';
import { PollActions } from '../State/Actions/polls.actions';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-one-poll',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './one-poll.component.html',
  styleUrl: './one-poll.component.css'
})
export class OnePollComponent implements OnInit {
  // poll!: onePoll
  specificPoll$: Observable<onePoll | null>;
  private pollId!: string;
  form!:FormGroup

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    // private fb:FormBuilder
  ) {
    this.specificPoll$ = this.store.select(specificPollSelector);
  }

  ngOnInit(): void {
    // this.form.controls=({
    //   pollChoiceId:this.fb.control(null,Validators.required)
    // })


    // Retrieve poll ID from route parameters
    this.route.paramMap.subscribe(params => {
      this.pollId = params.get('id') || ''; 
      if (this.pollId) {
        this.store.dispatch(PollActions.getSpecificPoll({ id: this.pollId }));
      }
    });
  }

  onSubmit(id:string){

    const pollId = this.route.snapshot.paramMap.get('id');

    if (pollId) {
      const responsePayload = {
        pollId: pollId,
        pollChoiceId: id
      };
      this.store.dispatch(PollActions.addPollResponse({ newPollResponse:responsePayload  }));
  }

}}
