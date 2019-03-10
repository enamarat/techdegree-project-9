import React from 'react';
import SearchForm from './SearchForm.js'
import Nav from './Nav.js'

const Header = (props) => {
  return (
    <header>
      <h1> Image Gallery </h1>
      <SearchForm showPictures={props.showPictures} titleValue={props.updateTitle}/>
      <Nav showPictures={props.showPictures}/>
    </header>
  );
}

export default Header;
