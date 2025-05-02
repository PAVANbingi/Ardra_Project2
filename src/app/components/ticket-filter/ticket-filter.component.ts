import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-filter',
  templateUrl: './ticket-filter.component.html',
  styleUrls: ['./ticket-filter.component.css'],
  imports:[FormsModule],



})
export class TicketFilterComponent {


  status: string = '';
  priority: string = '';

  @Output() filterChange = new EventEmitter<{ status: string; priority: string }>();

  onFilterChange() {
    this.filterChange.emit({ status: this.status, priority: this.priority });
  }

  clearFilters() {
    this.status = '';
    this.priority = '';
    this.onFilterChange();
  }
}
