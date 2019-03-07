import React from 'react';
import Header from './Header.js'
import Gallery from './Gallery.js'
import apiKey from './config.js'

console.log(apiKey)

class App extends React.Component {
  /* Initial state reflects the fact that there are no images*/
  state = {
    galleryItems: []
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Gallery />
      </div>
    );
 }
}

export default App;
