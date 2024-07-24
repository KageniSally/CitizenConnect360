import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { User } from '../../Models/authModel';
import { AuthActions } from '../State/Actions/auth.actions';
import { errorSelector, successSelector } from '../State/Selectors/auth.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,private router:Router,private store:Store<AppState>, private toastr:ToastrService) { }
  form!: FormGroup
  error$=this.store.select(errorSelector)
  success$=this.store.select(successSelector)



  ngOnInit() {
    this.form = new FormGroup({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required)
    })
  }



  onSubmit(){
    console.log(this.form.value)
    this.store.dispatch(AuthActions.login({user:this.form.value}))

  
        }
   
  }

