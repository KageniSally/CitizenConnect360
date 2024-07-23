import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/authModel';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { AuthActions } from '../State/Actions/auth.actions';
import { usersApprovedSelector } from '../State/Selectors/auth.selector';



@Component({
  selector: 'app-users-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css'
})
export class UsersAdminComponent implements OnInit{
 
  // users:User[]=[]
users$=this.store.select(usersApprovedSelector)
  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.store.dispatch(AuthActions.getUsersApproved())
    
    }


    // Delete user
  deleteUser(id: string): void {
    this.store.dispatch(AuthActions.deleteUser({ id }));
  }
  }

