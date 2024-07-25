import { Injectable } from '@angular/core';
import { View, ViewRequest, ViewResponse } from '../Models/viewModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {


  private readonly BaseURL = 'http://localhost:1000/views'
  constructor(private http: HttpClient) { }


  addView(newView: ViewRequest): Observable<ViewResponse> {
    const token=localStorage.getItem('token') as string
    return this.http.post<ViewResponse>(this.BaseURL, newView,{
      headers:new HttpHeaders({token:token})
    })
  }


  getViews():Observable<View[]>{
    const token=localStorage.getItem('token') as string
    return this.http.get<View[]>(this.BaseURL,{
      headers:new HttpHeaders({token:token})
      
    })
  }


}
