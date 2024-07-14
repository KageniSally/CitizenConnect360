import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse, RegisterResponse, User } from '../Models/authModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  users: User[] = [{
    id: "232rwf",
    name: "Sally Gitonga",
    email: "gitongasally@gmail.com",
    password: "Qwerty10?",
    role_id: "1",
    isEmailSent: 0,
    isDeleted: 0,
    isApproved: 0,
    profile_image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhZHl8ZW58MHx8MHx8fDA%3D"

  },
  {
    id: "ftsfe76",
    name: "Edith Gitonga",
    email: "edith@gmail.com",
    password: "Qwerty10?",
    role_id: "2",
    isEmailSent: 0,
    isDeleted: 0,
    isApproved: 0,
    profile_image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhZHl8ZW58MHx8MHx8fDA%3D"

  }, {
    id: "Hvgdst67",
    name: "Edwin Mulandi",
    email: "mulilieddy@gmail.com",
    password: "Qwerty10?",
    role_id: "3",
    isEmailSent: 0,
    isDeleted: 0,
    isApproved: 0,
    profile_image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhZHl8ZW58MHx8MHx8fDA%3D"

  }]

  getUsers() {
    return this.users;
  }

  getUser(id: string) {
    return this.users.find(x => x.id === id)
  }
  getUserByEmail(email: string) {

    return this.users.find(x => x.email === email)
    // // console.log(user)
    // return of(user);
  }



  private isLoggedIn = false
  private isUser = false
  private readonly BaseURL = ''
  public isAdmin = false

  login() {
    this.isLoggedIn = true
  }
  logOut() {
    this.isLoggedIn = false
    localStorage.clear()
    this.router.navigate(['/'])
  }

  showStatus() {
    return this.isLoggedIn
  }
  showUserLinks() {
    return !this.isUser
  }
  // Admin() {
  //   return this.isAdmin=!this.isAdmin
  // }

  functionalityRole() {
    let userEmail = localStorage.getItem("email")
    if (userEmail) {
      if (userEmail === "gitongasally@gmail.com") {
        console.log("Admin")

        return !this.isAdmin
      }
      return this.isAdmin
    }
    return this.isAdmin
  }










  registerUser(newUser: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.BaseURL + "register", newUser)

  }

  loginUser(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.BaseURL + "login", user)
  }
}
