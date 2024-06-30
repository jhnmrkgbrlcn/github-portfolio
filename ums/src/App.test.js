import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Change to MemoryRouter
import Login from "./components/Home/login";
import Notification from "./components/Home/notification";
import Role from "./components/Home/role";
import Signout from "./components/Home/signout";
import Settings from "./components/Home/settings";
import UserRegistraion from "./components/Home/userRegistration";
import User from "./components/Home/users";
import LogTable from "./components/Home/logsTable";
import { render } from '@testing-library/react';


describe('Login Component', () => {
  it('renders correctly', () => {
    const { container } = render(<MemoryRouter><Login /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
  describe('Notification Component', () => {
    it('renders correctly', () => {
      const { container } = render(<MemoryRouter><Notification /></MemoryRouter>);
      expect(container).toMatchSnapshot();
    });
    describe('Role Component', () => {
      it('renders correctly', () => {
        const { container } = render(<MemoryRouter><Role /></MemoryRouter>);
          expect(container).toMatchSnapshot();
      });
     describe('Settings Component', () => {
      it('renders correctly', () => {
        const { container } = render(<MemoryRouter><Settings /></MemoryRouter>);
          expect(container).toMatchSnapshot();
      });
          describe('Sign out Component', () => {
            it('renders correctly', () => {
              const { container } = render(<MemoryRouter><Signout /></MemoryRouter>);
                expect(container).toMatchSnapshot();
      }); 
      describe('User Component', () => {
        it('renders correctly', () => {
          const { container } = render(<MemoryRouter><User /></MemoryRouter>);
            expect(container).toMatchSnapshot();
      });
        describe('UserRegistration Component', () => {
          it('renders correctly', () => {
            const { container } = render(<MemoryRouter><UserRegistraion /></MemoryRouter>);
              expect(container).toMatchSnapshot();
      });
        describe('Log Table Component', () => {
          it('renders correctly', () => {
           const { container } = render(<MemoryRouter><LogTable /></MemoryRouter>);
             expect(container).toMatchSnapshot();
           });
          });
         });
        });
       });
      });
     });
    });
  });


