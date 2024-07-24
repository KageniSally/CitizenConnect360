import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll, PollRequest, PollResponse } from '../Models/pollModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private readonly BaseURL = 'http://localhost:1000/polls'
  constructor(private http: HttpClient) { }


  addPoll(newPoll: PollRequest): Observable<PollResponse> {
    const token=localStorage.getItem('token') as string
    return this.http.post<PollResponse>(this.BaseURL, newPoll,{
      headers:new HttpHeaders({token:token})
    })
  }

}
