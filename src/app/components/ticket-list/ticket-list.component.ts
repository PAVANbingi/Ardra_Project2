import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '@app/models/ticket.model'; // Import the Ticket model
import { TicketService } from '@app/services/ticket.service'; // Import the TicketService
import { FormsModule } from '@angular/forms';
import { TicketItemComponent } from '../ticket-item/ticket-item.component';
import { TicketFilterComponent } from '../ticket-filter/ticket-filter.component';

@Component({
  standalone: true,
  selector: 'app-ticket-list',
  imports: [CommonModule, FormsModule, TicketItemComponent, TicketFilterComponent],
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  @Input() filters!: { status: string; priority: string }; // ✅ Required for [filters]
  filteredTickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {} // Inject the TicketService

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets; // Fetch tickets from the service
      this.filteredTickets = [...this.tickets]; // Initialize filteredTickets with all tickets
    });
  }

  onFilterChange(filter: { status: string; priority: string }) {
    this.filteredTickets = this.tickets.filter((ticket) => {
      const statusMatch = filter.status === 'All' || ticket.status === filter.status;
      const priorityMatch = filter.priority === 'All' || ticket.priority === filter.priority;
      return statusMatch && priorityMatch;
    });
  }
}
