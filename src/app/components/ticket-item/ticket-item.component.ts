import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from '@app/models/ticket.model';
// import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-ticket-item',
  imports: [FormsModule,CommonModule],
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent {
  @Input() ticket!: Ticket;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
