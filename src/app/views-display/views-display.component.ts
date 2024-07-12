import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { View } from '../../Models/viewModel';

@Component({
  selector: 'app-views-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './views-display.component.html',
  styleUrl: './views-display.component.css'
})
export class ViewsDisplayComponent {
  views: View[] = [
    {
      id: "23dh",
      submittedBy: "Sally Gitonga",
      title: "About the finance bill 2024 and the constitution",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      date: "08-09-2024"
    },
    {
      id: "23dh",
      submittedBy: "Sally Gitonga",
      title: "About the finance bill 2024 and the constitution",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      date: "08-09-2024"
    },
    {
      id: "23dh",
      submittedBy: "Sally Gitonga",
      title: "About the finance bill 2024 and the constitution",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      date: "08-09-2024"
    },
    {
      id: "23dh",
      submittedBy: "Sally Gitonga",
      title: "About the finance bill 2024 and the constitution",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      date: "08-09-2024"
    },{
      id: "23dh",
      submittedBy: "Sally Gitonga",
      title: "About the finance bill 2024 and the constitution",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      date: "08-09-2024"
    },{
      id: "23dh",
      submittedBy: "Sally Gitonga",
      title: "About the finance bill 2024 and the constitution",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
      date: "08-09-2024"
    }
  ]
}
