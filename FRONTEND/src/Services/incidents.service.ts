import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incidence, IncidenceResponse, IncidentsRequest } from '../Models/incidenceModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {


  private readonly BaseURL='http://localhost:1000/incidents'
  constructor(private http:HttpClient) { }



  addIncident(newIncidents: IncidentsRequest): Observable<IncidenceResponse> {
    const token=localStorage.getItem('token') as string
    return this.http.post<IncidenceResponse>(this.BaseURL, newIncidents,{
      headers:new HttpHeaders({token:token})
    })
  }


  getIncidents():Observable<Incidence[]>{
    const token=localStorage.getItem('token') as string
    return this.http.get<Incidence[]>(this.BaseURL,{
      headers:new HttpHeaders({token:token})
    })
  }
}
