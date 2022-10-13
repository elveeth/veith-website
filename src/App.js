import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import MainLogo from './app/assets/img/logo-lore.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color='primary' sticky='top' expand='md'>
          <Container>
            <NavbarBrand href='/'>
              <img src={MainLogo} alt='main logo' />
            </NavbarBrand>
          </Container>
        </Navbar>
        If we turn from battle because there is little hope of victory, where then would valor be? Let it ever be the goal that stirs us, not the odds.
    </div>
  );
}

export default App;
