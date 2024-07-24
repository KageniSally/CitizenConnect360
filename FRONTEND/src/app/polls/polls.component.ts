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
  polls: Poll[] = [ ]




}
