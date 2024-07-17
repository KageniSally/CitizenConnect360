import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { User } from '../../Models/authModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,private router:Router,public auth:AuthService) { }
  form!: FormGroup



  ngOnInit() {
    this.form = new FormGroup({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required)
    })
  }



  onSubmit(){
    console.log(this.form.value)
    localStorage.setItem("email",this.form.value.email)
    this.router.navigate([''])
    this.auth.login()
    console.log(this.auth.showStatus());

  
    
  
        }
   
  }

