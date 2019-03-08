import React from 'react';
import SearchForm from './SearchForm.js'
import Nav from './Nav.js'

const Header = (props) => {
  return (
    <header>
      <h1> Image Gallery </h1>
      <SearchForm />
      <Nav showPictures={props.showPictures}/>
    </header>
  );
}

export default Header;
