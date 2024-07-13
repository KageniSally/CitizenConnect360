import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../Models/authModel';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu: boolean = false
  user: User | undefined;

  constructor(public auth: AuthService) { }


  ngOnInit(): void {
    const email = localStorage.getItem('email');
    console.log(email);
    if (email) {
      this.user = this.auth.getUserByEmail(email);
      if (!this.user) {
        console.error('No user found for this email');
        // Handle no user case, maybe redirect or show a message
      }
    } else {
      console.error('No email found in localStorage');
      // Handle no email case, maybe redirect to login
    }
  }

  navMenu() {
    this.showMenu = !this.showMenu
    // console.log(this.showMenu)

    if (this.showMenu) {
      const responsiveNavBar = document.querySelector(".responsive-part-two") as HTMLDivElement
      if (responsiveNavBar) {
        responsiveNavBar.style.display = "flex";
      }
    } else {
      const responsiveNavBar = document.querySelector(".responsive-part-two") as HTMLDivElement

      responsiveNavBar.style.display = "none";
    }
  }

}
