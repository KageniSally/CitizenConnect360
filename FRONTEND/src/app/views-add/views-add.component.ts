import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { ViewsActions } from '../State/Actions/views.actions';

@Component({
  selector: 'app-views-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './views-add.component.html',
  styleUrl: './views-add.component.css'
})
export class ViewsAddComponent implements OnInit {

  form!: FormGroup


  constructor(private fb: FormBuilder, private store:Store<AppState>) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: this.fb.control(null, Validators.required),
      description: this.fb.control(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.store.dispatch(ViewsActions.addView({newView:this.form.value}))
  }
}
