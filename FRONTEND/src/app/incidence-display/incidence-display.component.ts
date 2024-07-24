import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Incidence } from '../../Models/incidenceModel';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { incidentsSelector } from '../State/Selectors/incidents.selector';
import { IncidentsActions } from '../State/Actions/incidents.actions';

@Component({
  selector: 'app-incidence-display',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './incidence-display.component.html',
  styleUrl: './incidence-display.component.css'
})
export class IncidenceDisplayComponent implements OnInit{
// incidences:Incidence[]=[]

constructor(private store:Store<AppState>){}




ngOnInit(): void {
  this.store.dispatch(IncidentsActions.getIncidents())

  // this.store.select(incidentsSelector).subscribe(allIncidents=>{
  //   console.log('jj',allIncidents);
    
  // })
  
}
incidents$=this.store.select(incidentsSelector)
}


