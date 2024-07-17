import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Incidence } from '../../Models/incidenceModel';

@Component({
  selector: 'app-incidence-display',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './incidence-display.component.html',
  styleUrl: './incidence-display.component.css'
})
export class IncidenceDisplayComponent {
incidences:Incidence[]=[{
  id: "23",
  title: "War in Parklands",
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  image: "https://plus.unsplash.com/premium_photo-1678867989945-7101ce2cb73b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFtYWdlZCUyMGhvdXNlfGVufDB8fDB8fHww",
  reportedBy: "Sally Gitonga",
  date: "09-08-2019",
  contact:"0790118500"
},
{
  id: "23",
  title: "War in Parklands",
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  image: "https://images.unsplash.com/photo-1533427221277-ccf4a4e89bc8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFtYWdlZCUyMGhvdXNlfGVufDB8fDB8fHww",
  reportedBy: "Sally Gitonga",
  date: "09-08-2019",
  contact:"0790118500"
}]
}
