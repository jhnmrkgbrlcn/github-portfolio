import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signout from '../signout.jsx';

describe('Signout Component', () => {
  it('renders correctly', () => {
    render(<MemoryRouter><Signout /></MemoryRouter>);

    expect(screen.queryByRole('button', { name: 'ExitToAppIcon' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Cancel' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Sign Out' })).toBeNull();
  });

  it('Cancel Button Click', () => {
    render(<MemoryRouter><Signout /></MemoryRouter>);

    const cancelButton = screen.queryByRole('button', { name: 'ExitToAppIcon' });
    expect(cancelButton).toBeDefined();

    const iconButton = screen.queryByRole('button', { name: 'Cancel' });
    expect(iconButton).toBeNull();

  });
  it('Signout Button Click', () => {
    render(<MemoryRouter><Signout /></MemoryRouter>);

    const cancelButton = screen.queryByRole('button', { name: 'ExitToAppIcon' });
    expect(cancelButton).toBeDefined();

    const iconButton = screen.queryByRole('button', { name: 'Sign Out' });
    expect(iconButton).toBeNull();
    
  });
});
