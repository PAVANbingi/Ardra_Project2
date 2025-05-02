export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Closed';  // Enum-like string literals
  priority: 'High' | 'Medium' | 'Low';      // Enum-like string literals
  createdAt: Date;
}
