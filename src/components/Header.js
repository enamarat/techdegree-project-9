import React from 'react';
import SearchForm from './SearchForm.js'
import Nav from './Nav.js'

const Header = () => {
  return (
    <header>
      <h1> Image Gallery </h1>
      <SearchForm />
      <Nav />
    </header>
  );
}

export default Header;
