import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/authModel';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css'
})
export class UsersAdminComponent implements OnInit{
 
  users:User[]=[]

  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.users=this.auth.getUsers()

    }
  }

