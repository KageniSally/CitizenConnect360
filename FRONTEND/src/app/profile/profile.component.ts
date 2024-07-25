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
  email!:string
  name!:string
  role!:string
  constructor(public auth: AuthService) { }


  ngOnInit(): void {
    if(this.email){
     
    }
  
    const Uname = localStorage.getItem('name');
    const Urole = localStorage.getItem('role');
    const Uemail=localStorage.getItem('email')

    if(Uname){
      this.name=Uname
    }


    if(Uemail){
      this.email=Uemail
    }

    if(Urole){
      this.role=Urole
    }
    
    
    
  }

}
  

