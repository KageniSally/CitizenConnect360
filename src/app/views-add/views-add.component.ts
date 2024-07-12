import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-views-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './views-add.component.html',
  styleUrl: './views-add.component.css'
})
export class ViewsAddComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: this.fb.control(null, Validators.required),
      description: this.fb.control(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.form)
  }
}
