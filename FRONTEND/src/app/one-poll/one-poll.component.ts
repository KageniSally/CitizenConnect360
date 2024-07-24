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
  poll!: Poll
    
}
