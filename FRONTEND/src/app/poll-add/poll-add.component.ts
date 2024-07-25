import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { PollActions } from '../State/Actions/polls.actions';

@Component({
  selector: 'app-poll-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './poll-add.component.html',
  styleUrl: './poll-add.component.css'
})
export class PollAddComponent implements OnInit{
form!:FormGroup
constructor(private fb:FormBuilder, private store:Store<AppState>){}

ngOnInit(): void {
 this.form=new FormGroup({
  question:this.fb.control(null,Validators.required),
  choices: this.fb.array([
    this.fb.control(null,Validators.required)
  ])
 })
}

get choices(): FormArray {
  return this.form.get('choices') as FormArray;
}

addChoice(): void {
  this.choices.push(new FormControl('', Validators.required));
}


onSubmit(){
  console.log(this.form)
  this.store.dispatch(PollActions.addPolls({newPoll:this.form.value}))
  this.form.reset()
}
}
