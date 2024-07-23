import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { usersNotApprovedSelector } from '../State/Selectors/auth.selector';

@Component({
  selector: 'app-government-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './government-admin.component.html',
  styleUrl: './government-admin.component.css'
})
export class GovernmentAdminComponent implements OnInit {
  // users:User[]=[]

  users$ = this.store.select(usersNotApprovedSelector)
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    // this.users=this.auth.getUsers()
    this.store.dispatch(AuthActions.getUsersNotApproved())
  }


  deleteUser(id: string) {
    this.store.dispatch(AuthActions.deleteUser({ id }));
  }


  approveUser(id:string){
    this.store.dispatch(AuthActions.updateUserApproval({ id, isApproved: 1 }));

  }
}
