import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Role from '../role.jsx';


describe('Role Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><Role /></MemoryRouter>);

      expect(screen.getByRole('button', { name: 'Add Roles' })).toBeInTheDocument(); 
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument(); 

    });
    it('Add Roles Button', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);

        const addrolesButton = screen.getByRole('button', { name: 'Add Roles' });
        fireEvent.click(addrolesButton); 
    });
    it('Search Bar', () => {
        render(<MemoryRouter><Role /></MemoryRouter>); 

        const searchInput = screen.getByPlaceholderText('Search'); 

        fireEvent.change(searchInput, { target: { value: 'Admin' } });  
        fireEvent.change(searchInput, { target: { value: 'Manager' } }); 
        fireEvent.change(searchInput, { target: { value: 'User' } }); 
    });
    it('Sort by ID', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);
    
        const sortByIdButton = screen.getByRole('button', { name: 'ID' });
        fireEvent.click(sortByIdButton);
      });
      it('sorts by Handle', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);
    
        const sortByHandleButton = screen.getByRole('button', { name: 'Handle' });
        fireEvent.click(sortByHandleButton);
    });
      it('Sorts by No. of Users', () => {
         render(<MemoryRouter><Role /></MemoryRouter>);

         const sortByNofuserButton = screen.getByRole('button', { name: 'No. of Users' });
         fireEvent.click(sortByNofuserButton);
    });
      it('Sorts by Role', () => {
         render(<MemoryRouter><Role /></MemoryRouter>);

         const sortByRoleButton = screen.getByRole('button', { name: 'Role' });
         fireEvent.click(sortByRoleButton);
    });
    it('Sorts by Date Created', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);

        const sortByDateCreatedButton = screen.getByRole('button', { name: 'Date Created' });
        fireEvent.click(sortByDateCreatedButton);
   });
});

