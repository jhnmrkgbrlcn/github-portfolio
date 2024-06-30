import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserRegistration from '../userRegistration.jsx';

describe('UserRegistration Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><UserRegistration /></MemoryRouter>);
      
      expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
      expect(screen.getByLabelText('Middle Name:')).toBeInTheDocument(); 
      expect(screen.getByLabelText('Day of Birth:')).toBeInTheDocument();

      expect(screen.getByLabelText('Sex:')).toBeInTheDocument();

      expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
      expect(screen.getByLabelText('Address')).toBeInTheDocument();

      expect(screen.getByLabelText('Username:')).toBeInTheDocument();
      expect(screen.getByLabelText('Email Address:')).toBeInTheDocument(); 
      expect(screen.getByLabelText('Role:')).toBeInTheDocument();

      expect(screen.getByLabelText('Contact No:')).toBeInTheDocument();
      
      expect(screen.getByLabelText('New Password:')).toBeInTheDocument();
      expect(screen.getByLabelText('Confirm Password:')).toBeInTheDocument();

      expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    });
    it('Handles user input correctly', () => {
        render(<MemoryRouter><UserRegistration /></MemoryRouter>);
        

        const firstnameInput = screen.getByLabelText('First Name:');
        const middlenameInput = screen.getByLabelText('Middle Name:');
        const birthInput = screen.getByLabelText('Day of Birth:');
        const sexInput = screen.getByLabelText('Sex:');
        const lastnameInput = screen.getByLabelText('Last Name:');
        const addInput = screen.getByLabelText('Address');
        const usernameInput = screen.getByLabelText('Username:');
        const emailaddInput = screen.getByLabelText('Email Address:');
        const roleInput = screen.getByLabelText('Role:');
        const contactnumInput = screen.getByLabelText('Contact No:');
        const newpasswordInput = screen.getByLabelText('New Password:');
        const confirmpasswordInput = screen.getByLabelText('Confirm Password:');

        fireEvent.change(firstnameInput, { target: { value: 'Bulbasor' } });
        fireEvent.change(middlenameInput, { target: { value: 'Pokemon' } });  
        fireEvent.change(birthInput, { target: { value: '01/08/2022' } });
        

        fireEvent.change(sexInput, { target: { value: 'Male' } });  

        fireEvent.change(lastnameInput, { target: { value: 'Coco' } });
        fireEvent.change(addInput, { target: { value: 'Alfonso Cavite' } });  
        fireEvent.change(usernameInput, { target: { value: 'Bulba' } });
        fireEvent.change(emailaddInput, { target: { value: 'bulbasor@gmail.com' } });
        fireEvent.change(roleInput, { target: { value: 'Student' } });

        fireEvent.change(contactnumInput, { target: { value: '09578537686' } });
        fireEvent.change(newpasswordInput, { target: { value: 'bulbaaaaa' } });
        fireEvent.change(confirmpasswordInput, { target: { value: 'bulbaaaaa' } });
  
         // Trigger form submission
    const submitButton = screen.getByRole('button', { name: 'Register' });
    fireEvent.click(submitButton);

  });
  it('Cancel Button', () => {
    render(<MemoryRouter><UserRegistration /></MemoryRouter>);
    

    const firstnameInput = screen.getByLabelText('First Name:');
    const middlenameInput = screen.getByLabelText('Middle Name:');
    const birthInput = screen.getByLabelText('Day of Birth:');
    const sexInput = screen.getByLabelText('Sex:');
    const lastnameInput = screen.getByLabelText('Last Name:');
    const addInput = screen.getByLabelText('Address');
    const usernameInput = screen.getByLabelText('Username:');
    const emailaddInput = screen.getByLabelText('Email Address:');
    const roleInput = screen.getByLabelText('Role:');
    const contactnumInput = screen.getByLabelText('Contact No:');
    const newpasswordInput = screen.getByLabelText('New Password:');
    const confirmpasswordInput = screen.getByLabelText('Confirm Password:');


    fireEvent.change(firstnameInput, { target: { value: 'Bulbasor' } });
    fireEvent.change(middlenameInput, { target: { value: 'Pokemon' } });  
    fireEvent.change(birthInput, { target: { value: '01/08/2022' } });
    

    fireEvent.change(sexInput, { target: { value: 'Male' } });  

    fireEvent.change(lastnameInput, { target: { value: 'Coco' } });
    fireEvent.change(addInput, { target: { value: 'Alfonso Cavite' } });  
    fireEvent.change(usernameInput, { target: { value: 'Bulba' } });
    fireEvent.change(emailaddInput, { target: { value: 'bulbasor@gmail.com' } });
    fireEvent.change(roleInput, { target: { value: 'Student' } });

    fireEvent.change(contactnumInput, { target: { value: '09578537686' } });
    fireEvent.change(newpasswordInput, { target: { value: 'bulbaaaaa' } });
    fireEvent.change(confirmpasswordInput, { target: { value: 'bulbaaaaa' } });

     // Trigger form submission
const submitButton = screen.getByRole('button', { name: 'Cancel' });
fireEvent.click(submitButton);
  });
  it('Validation for Contact Number and Password', () => {
    render(<MemoryRouter><UserRegistration /></MemoryRouter>);
    

    const firstnameInput = screen.getByLabelText('First Name:');
    const middlenameInput = screen.getByLabelText('Middle Name:');
    const birthInput = screen.getByLabelText('Day of Birth:');
    const sexInput = screen.getByLabelText('Sex:');
    const lastnameInput = screen.getByLabelText('Last Name:');
    const addInput = screen.getByLabelText('Address');
    const usernameInput = screen.getByLabelText('Username:');
    const emailaddInput = screen.getByLabelText('Email Address:');
    const roleInput = screen.getByLabelText('Role:');
    const contactnumInput = screen.getByLabelText('Contact No:');
    const newpasswordInput = screen.getByLabelText('New Password:');
    const confirmpasswordInput = screen.getByLabelText('Confirm Password:');

    fireEvent.change(firstnameInput, { target: { value: 'Bulbasor' } });
    fireEvent.change(middlenameInput, { target: { value: 'Pokemon' } });  
    fireEvent.change(birthInput, { target: { value: '01/08/2022' } });
    

    fireEvent.change(sexInput, { target: { value: 'Male' } });  

    fireEvent.change(lastnameInput, { target: { value: 'Coco' } });
    fireEvent.change(addInput, { target: { value: 'Alfonso Cavite' } });  
    fireEvent.change(usernameInput, { target: { value: 'Bulba' } });
    fireEvent.change(emailaddInput, { target: { value: 'bulbasor@gmail.com' } });
    fireEvent.change(roleInput, { target: { value: 'Student' } });

    fireEvent.change(contactnumInput, { target: { value: '095783456' } });
    fireEvent.change(newpasswordInput, { target: { value: 'bulbaaaaa' } });
    fireEvent.change(confirmpasswordInput, { target: { value: 'bulbaa' } });

     // Trigger form submission
    const submitButton = screen.getByRole('button', { name: 'Register' });
    fireEvent.click(submitButton);

    const setErrorMessage = screen.getByText('Please fill in all details and make sure phone number is valid and passwords match.');
    expect(setErrorMessage).toBeInTheDocument();

  });
});


