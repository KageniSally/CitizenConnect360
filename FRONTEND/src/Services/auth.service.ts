import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, User } from '../Models/authModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  users: User[] = []


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
  private readonly BaseURL = 'http://localhost:1000/users/'
  public isAdmin = false
  private token = localStorage.getItem('token') as string;

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



  registerUser(newUser: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.BaseURL + "register", newUser)
  }

  loginUser(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.BaseURL + "login", user)
  }


  getUsersApproved(): Observable<User[]> {
    return this.http.get<User[]>(this.BaseURL + "approved/new/approved", {
      headers: new HttpHeaders({ token: this.token })
    })
  }


  getUsersNotApproved(): Observable<User[]> {
    return this.http.get<User[]>(this.BaseURL + "notApproved/new", {
      headers: new HttpHeaders({ token: this.token })
    })
  }


  deleteUser(id: string): Observable<void> {

    return this.http.delete<void>(`${this.BaseURL}${id}`, {
      headers: new HttpHeaders({ token: this.token })
    });
  }


  updateUserApproval(id: string, isApproved: number): Observable<void> {

    return this.http.put<void>(`${this.BaseURL}approve/${id}`, { isApproved }, {
      headers: new HttpHeaders({ token: this.token })
    });
  }

  getSpecificUser(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.BaseURL}${id}`, {
      headers: new HttpHeaders({ token: this.token })
    })
  }
}
