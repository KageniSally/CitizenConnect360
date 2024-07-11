import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu: boolean = false

  constructor(public auth: AuthService) { }

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
