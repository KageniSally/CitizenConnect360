import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{
form!:FormGroup

constructor(private fb:FormBuilder){}

ngOnInit(){
  this.form=new FormGroup({
    email:this.fb.control(null,[Validators.email,Validators.required])
  })
}


onSubmit(){
  console.log(this.form)
}
}
