import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/authModel';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user!: User 


  
  constructor(private auth:AuthService,private router:Router){}

  ngOnInit(): void {
    let email = localStorage.getItem("email");
    console.log(email)
    if (email) {
      // this.auth.getUserByEmail(email)
    }  else {
      console.error('No email found in localStorage');
    }
  }

  
}
