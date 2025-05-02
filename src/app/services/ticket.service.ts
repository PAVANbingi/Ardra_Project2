import { Injectable } from '@angular/core';
import { Ticket } from '@app/models/ticket.model'; // Import the model
import { Observable, of } from 'rxjs'; // Import RxJS

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private tickets: Ticket[] = [

      {
        id: 1,
        title: 'Login Issue',
        description: 'Unable to login to the portal',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'Payment Failed',
        description: 'Transaction not completed but amount deducted',
        status: 'In Progress',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 3,
        title: 'Page not loading',
        description: 'The dashboard page is stuck on loading',
        status: 'Closed',
        priority: 'Low',
        createdAt: new Date(),
      },
      {
        id: 4,
        title: 'Forgot Password',
        description: 'User forgot their password and needs a reset link',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 5,
        title: 'Account Suspended',
        description: 'User’s account has been suspended due to suspicious activity',
        status: 'In Progress',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 6,
        title: 'Feature Request: Dark Mode',
        description: 'User has requested the addition of a dark mode feature',
        status: 'Closed',
        priority: 'Low',
        createdAt: new Date(),
      },
      {
        id: 7,
        title: 'Network Connectivity Issue',
        description: 'User is experiencing intermittent network connectivity issues',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 8,
        title: 'Mobile App Crash',
        description: 'Mobile app crashes when trying to open the dashboard',
        status: 'In Progress',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 9,
        title: 'Data Sync Issue',
        description: 'Data syncing between mobile and web is not working',
        status: 'Closed',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 10,
        title: 'UI Glitch on Dashboard',
        description: 'There is a UI glitch where elements are overlapping on the dashboard',
        status: 'Open',
        priority: 'Low',
        createdAt: new Date(),
      },
      {
        id: 11,
        title: 'Error 500: Server Error',
        description: 'User is receiving a 500 server error when accessing their profile',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 12,
        title: 'App Notifications Not Working',
        description: 'Push notifications are not being delivered to the mobile app',
        status: 'In Progress',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 13,
        title: 'Email Notifications Delayed',
        description: 'Users are experiencing delays in receiving email notifications',
        status: 'Closed',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 14,
        title: 'Profile Picture Upload Failure',
        description: 'User cannot upload a profile picture due to a system error',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 15,
        title: 'Slow Performance on Dashboard',
        description: 'The dashboard is taking too long to load and refresh',
        status: 'In Progress',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 16,
        title: 'Incorrect Data Display',
        description: 'The user data shown on the dashboard is incorrect or outdated',
        status: 'Closed',
        priority: 'Low',
        createdAt: new Date(),
      },
      {
        id: 17,
        title: 'Login via Google Failing',
        description: 'Users are unable to login using Google authentication',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
      {
        id: 18,
        title: 'Unable to Submit Feedback',
        description: 'User cannot submit feedback via the feedback form on the site',
        status: 'In Progress',
        priority: 'Low',
        createdAt: new Date(),
      },
      {
        id: 19,
        title: 'Missing Transaction History',
        description: 'Transaction history is not visible for users in the app',
        status: 'Closed',
        priority: 'Medium',
        createdAt: new Date(),
      },
      {
        id: 20,
        title: 'API Integration Issue',
        description: 'Issues with the integration of third-party APIs causing data sync failures',
        status: 'Open',
        priority: 'High',
        createdAt: new Date(),
      },
    ];



  getTickets(): Observable<Ticket[]> {
    return of(this.tickets); // Simulating an HTTP request
  }

  // You can add more methods here for adding, updating, and deleting tickets
}
