import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketFilterComponent } from './components/ticket-filter/ticket-filter.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';

@Component({
  selector: 'app-root',
  standalone: true,   // ✅ this is required
  imports: [RouterOutlet, TicketFilterComponent, TicketListComponent, TicketItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFilters = { status: '', priority: '' };

  applyFilters(filters: { status: string; priority: string }) {
    this.currentFilters = filters;
  }
}
