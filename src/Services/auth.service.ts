import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse, RegisterResponse, User } from '../Models/authModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  private isLoggedIn = false
  private isUser=true
  private readonly BaseURL = ''

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
  showUserLinks(){
    return this.isUser
  }


  



  registerUser(newUser: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.BaseURL + "register", newUser)

  }

  loginUser(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.BaseURL + "login", user)
  }
}
