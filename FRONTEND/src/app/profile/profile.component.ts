import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/authModel';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User | null = null; 

  constructor(public auth: AuthService) { }


  ngOnInit(): void {
    const email = localStorage.getItem('email');
    console.log(email);
    if (email) {
      this.user = this.auth.getUserByEmail(email) || null;
      console.log(this.user);
      
    }
  }

  role(){
    return this.user?.role

      }
  }
  

