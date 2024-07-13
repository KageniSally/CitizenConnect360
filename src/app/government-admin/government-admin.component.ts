import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/authModel';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-government-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './government-admin.component.html',
  styleUrl: './government-admin.component.css'
})
export class GovernmentAdminComponent implements OnInit {
users:User[]=[]


constructor(private auth:AuthService){}
ngOnInit(): void {
  this.users=this.auth.getUsers()
}

}
