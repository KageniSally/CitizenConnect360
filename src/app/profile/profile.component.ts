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
    let role=this.user?.role_id
      
      if(role==="1"){
        localStorage.setItem("role","Admin")
        return "Admin"
      }else if(role==="2"){
      localStorage.setItem("role","Government Official")
      return "Government Official"
      }
      else if(role==="3"){
        localStorage.setItem("role","Normal User")
        return "Normal User"
      }else{
        return "User Not Found"
      }

      }
  }
  

