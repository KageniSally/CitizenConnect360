import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  showMenu: boolean = false
  user: User | null = null;
  isAdmin: boolean = false
  

  constructor(public auth: AuthService) { }


  ngOnInit() {
    // const email = localStorage.getItem('email');
    // console.log(email);
    // if (email) {
    //   this.user = this.auth.getUserByEmail(email) || null;
    //   console.log(this.user);
    // }
    // // }
   
    //   // let role = localStorage.getItem("role")
    //   // if (role === "Admin") {
    //   //   return this.auth.changeRole()
    //   // } else if (role === "Government Official" || role === "Normal User") {
    //   //   return this.isAdmin
    //   // }else{
    //   //   return this.isAdmin
    //   // }

    //   let role=this.user?.role_id
        
    //   if(role==="1"){
    //     localStorage.setItem("role","Admin")
    //     return "Admin"
    //   }else if(role==="2"){
    //   localStorage.setItem("role","Government Official")
    //   return "Government Official"
    //   }
    //   else if(role==="3"){
    //     localStorage.setItem("role","Normal User")
    //     return "Normal User"
    //   }else{
    //     return "User Not Found"
    //   }
    
    
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
