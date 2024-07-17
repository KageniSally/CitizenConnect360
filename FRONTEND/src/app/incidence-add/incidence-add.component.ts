import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incidence-add',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './incidence-add.component.html',
  styleUrl: './incidence-add.component.css'
})
export class IncidenceAddComponent implements OnInit{
form!:FormGroup


constructor(private fb:FormBuilder){}
ngOnInit(): void {
  this.form=new FormGroup({
    title:this.fb.control(null,Validators.required),
    description:this.fb.control(null,Validators.required),
    image:this.fb.control(null,Validators.required),
    area:this.fb.control(null,Validators.required),
    contact:this.fb.control(null,Validators.required)
  })
}

onSubmit(){
  console.log(this.form)
}
}