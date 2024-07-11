import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './poll-add.component.html',
  styleUrl: './poll-add.component.css'
})
export class PollAddComponent implements OnInit{
form!:FormGroup
constructor(private fb:FormBuilder){}

ngOnInit(): void {
 this.form=new FormGroup({
  title:this.fb.control(null,Validators.required),
  options: this.fb.array([]),
 })
}

get options(): FormArray {
  return this.form.get('options') as FormArray;
}

addOption(): void {
  this.options.push(new FormControl('', Validators.required));
}


onSubmit(){
  console.log(this.form)
}
}
