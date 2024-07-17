import { Component } from '@angular/core';
import { Poll } from '../../Models/pollModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-poll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-poll.component.html',
  styleUrl: './one-poll.component.css'
})
export class OnePollComponent {
  poll: Poll = 
    {
      id: "9dcgdgf",
      title: "Pass Finance Bill",
      createdBy: "Sally Gitonga",
      options: ["yes", "No","Await Review","Sally"],
      votes: 5,
      date: "08-09-2024"
    }
  
}
