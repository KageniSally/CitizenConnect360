import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { onePoll, Poll, PollChoiceResponse, PollRequest, PollResponse } from '../Models/pollModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private readonly BaseURL = 'http://localhost:1000/polls'
  private token=localStorage.getItem('token') as string
  constructor(private http: HttpClient) { }


  addPoll(newPoll: PollRequest): Observable<PollResponse> {
 
    return this.http.post<PollResponse>(this.BaseURL, newPoll,{
      headers:new HttpHeaders({token:this.token})
    })
  }


  getPolls():Observable<Poll[]>{

    return this.http.get<Poll[]>(this.BaseURL,{
      headers:new HttpHeaders({token:this.token})
    })
  }


  getSpecificPoll(id: string): Observable<onePoll> {
    return this.http.get<onePoll>(`${this.BaseURL}/${id}`, {
      headers: new HttpHeaders({ token: this.token })
    })
  }


  addPollResponse(newPollResponse: PollChoiceResponse): Observable<PollResponse> {
 
    return this.http.post<PollResponse>(`${this.BaseURL}/addResponse`, newPollResponse,{
      headers:new HttpHeaders({token:this.token})
    })
  }


  // submitPollResponse(responsePayload: PollChoiceResponse): Observable<PollResponse> {
  //   return this.http.post<PollResponse>(`${this.apiUrl}/polls/response`, responsePayload);
  // }


}
