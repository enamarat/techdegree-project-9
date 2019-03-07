import React from 'react';
import Header from './Header.js'
import SearchForm from './SearchForm.js'
import Nav from './Nav.js'
import Gallery from './Gallery.js'

class App extends React.Component {
  state = {
    galleryItems: []
  }

  render() {
    return(
      <div className="container">
        <Header />
        <SearchForm />
        <Nav />
        <Galley />
      </div>
    );
  }
}

export default App;
