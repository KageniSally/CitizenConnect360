import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Poll } from '../../Models/pollModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent {
  polls: Poll[] = [
    {
      id: "9dcgdgf",
      title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      createdBy: "Sally Gitonga",
      options: ["yes", "No"],
      votes: 5,
      date: "08-09-2024"
    },

    {
      id: "2dgf",
      title: "Pass Finance Bill",
      createdBy: "Sally Gitonga",
      options: ["yes", "No"],
      votes: 5,
      date: "08-09-2024"
    },

    {
      id: "1gfdts",
      title: "Pass Finance Bill",
      createdBy: "Sally Gitonga",
      options: ["yes", "No"],
      votes: 5,
      date: "08-09-2024"
    }
  ]




}
