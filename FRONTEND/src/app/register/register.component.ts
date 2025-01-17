import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { RegisterRequest, User } from '../../Models/authModel';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }
  form!: FormGroup
  errorPassword: string = 'Required'
  roles = ['Government Official', 'Citizen']
  newPerson!:RegisterRequest

  ngOnInit() {
    this.form = new FormGroup({
      name: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [this.passwordValidator.bind(this), Validators.required]),
      role: this.fb.control(null, Validators.required),
      terms: this.fb.control(false, Validators.requiredTrue)
    })
  }



  onSubmit() {
    // console.log(this.form)
    this.newPerson = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role
    }
    console.log(this.form)
    //Dispatch action
    this.store.dispatch(AuthActions.register({ newUser: this.newPerson }))
  }


  passwordValidator(control: FormControl): { [x: string]: Boolean } | null {
    const value = control.value;
    if (value == undefined) {
      console.log('Value undefined')
      return { passwordValidator: true }; // Or handle this case as per your application's logic
    }
    let hasDigit = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    for (let i = 0; i < control.value.length; i++) {
      let charCode = control.value.charCodeAt(i);

      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasLowerCase = true;
      } else if (charCode >= 65 && charCode <= 90) {
        hasUpperCase = true;
      } else if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        hasSpecialChar = true;
      }// check patterns
    }

    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar) {
      console.log('good control')
      return null
    } else {
      this.errorPassword = 'Invalid'
      console.log('bad control')

      return { passwordValidator: true }
    }

  }
}
