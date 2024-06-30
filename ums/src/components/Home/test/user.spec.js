import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import User from '../users.jsx';
import { useAccordionButton } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';


describe('User Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><User /></MemoryRouter>);

      expect(screen.getByRole('button', { name: 'Add User' })).toBeInTheDocument(); 
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument(); 

     
    });
    it('Add User Button', () => {
        render(<MemoryRouter><User /></MemoryRouter>);

        const adduserButton = screen.getByRole('button', { name: 'Add User' });
        fireEvent.click(adduserButton); 
    });
    it('Search Bar', () => {
      render(<MemoryRouter><User /></MemoryRouter>); 

      const searchInput = screen.getByPlaceholderText('Search');
      const searchTerm = 'John Smith'; 

      fireEvent.change(searchInput, { target: { value: searchTerm } });
      expect(searchInput).toHaveValue(searchTerm);

 
      const rowsAfterSearch = screen.getAllByRole('row').slice(1); 
      expect(rowsAfterSearch.length).toBeGreaterThan(0);
  
    });
    it('Sorts by Date Created', () => {
        render(<MemoryRouter><User /></MemoryRouter>);

        const sortByDateCreatedButton = screen.getByRole('button', { name: 'Date Created' });
        fireEvent.click(sortByDateCreatedButton);

        expect(sortByDateCreatedButton);

        
    });
    it('Sort by ID', () => {
       render(<MemoryRouter><User /></MemoryRouter>);

       const sortByIdButton = screen.getByRole('button', { name: 'ID' });
       fireEvent.click(sortByIdButton);

       expect(sortByIdButton);
    });
    it('sorts by Name', () => {
       render(<MemoryRouter><User /></MemoryRouter>);

       const sortByNameButton = screen.getByRole('button', { name: 'Name' });
       fireEvent.click(sortByNameButton);
       console.log(sortByNameButton);
       expect(sortByNameButton);
    });
    it('Sorts by Status', () => {
      render(<MemoryRouter><User /></MemoryRouter>);

      const sortByStatusButton = screen.getByRole('button', { name: 'Status' });
      fireEvent.click(sortByStatusButton);

      expect(sortByStatusButton);
    });
    it('Sorts by Role', () => {
      render(<MemoryRouter><User /></MemoryRouter>);

      const sortByRoleButton = screen.getByRole('button', { name: 'Role' });
      fireEvent.click(sortByRoleButton);

      expect(sortByRoleButton);
  });
});
