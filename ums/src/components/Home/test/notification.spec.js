import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Notification from '../notification.jsx';

describe('Notification Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><Notification /></MemoryRouter>);
  
      expect(screen.queryByText('button', { name: 'IconButton' })).toBeNull();

    });
    it('Check Notification and Display Some news', () => {
      render(<MemoryRouter><Notification /></MemoryRouter>);
const NotificationButton = screen.getByTestId('NotificationsIcon');
fireEvent.click(NotificationButton);

const someMessage = screen.getByText('Some news');

   });
   it('Check Notification and Display Another news', () => {
    render(<MemoryRouter><Notification /></MemoryRouter>);
const NotificationButton = screen.getByTestId('NotificationsIcon');
fireEvent.click(NotificationButton);

const anotherMessage = screen.getByText('Another news');
   });
   it('Check Notification and Display Something else here', () => {
    render(<MemoryRouter><Notification /></MemoryRouter>);
const NotificationButton = screen.getByTestId('NotificationsIcon');
fireEvent.click(NotificationButton);

const somethingMessage = screen.getByText('Something else here');
   });
});

