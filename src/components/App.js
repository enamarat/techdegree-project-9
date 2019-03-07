import React from 'react';
import Header from './Header.js'
import SearchForm from './SearchForm.js'
import Nav from './Nav.js'
import Gallery from './Gallery.js'

class App extends React.Component {
  /* Initial state reflects the fact that there are no images*/
  state = {
    galleryItems: []
  }

  render() {
    return(
      <div className="container">
        <Header />
        <SearchForm />
        <Nav />
        <Gallery />
      </div>
    );
 }
}

export default App;
