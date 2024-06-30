import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LogsTable from '../logsTable.jsx';

describe('LogsTable Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><LogsTable /></MemoryRouter>);
     
    });
    it('Sort by ID', () => {
        render(<MemoryRouter><LogsTable /></MemoryRouter>);
    
        const sortByIdButton = screen.getByRole('button', { name: 'ID' });
        fireEvent.click(sortByIdButton);
      });
      it('sorts by Description', () => {
        render(<MemoryRouter><LogsTable /></MemoryRouter>);
    
        const sortByDescriptionButton = screen.getByRole('button', { name: 'Description' });
        fireEvent.click(sortByDescriptionButton);
    });
      it('Sorts by Time', () => {
         render(<MemoryRouter><LogsTable /></MemoryRouter>);

         const sortByTimeButton = screen.getByRole('button', { name: 'Time' });
         fireEvent.click(sortByTimeButton);
    });
      it('Sorts by Date', () => {
         render(<MemoryRouter><LogsTable /></MemoryRouter>);

         const sortByDateButton = screen.getByRole('button', { name: 'Date' });
         fireEvent.click(sortByDateButton);
    });
    it('Sorts by User', () => {
        render(<MemoryRouter><LogsTable /></MemoryRouter>);

        const sortByUserCreatedButton = screen.getByRole('button', { name: 'User' });
        fireEvent.click(sortByUserCreatedButton);
   });
});
