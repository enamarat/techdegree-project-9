import React from 'react';
import Header from './Header.js'
import Gallery from './Gallery.js'
import NotFound from './NotFound.js'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import apiKey from '../config.js'
import axios from 'axios';


class App extends React.Component {
  /* Initial state reflects the fact that there are no images*/
constructor() {
  super();
  this.state = {
    galleryItems: []
  }
}

showImages = (tag) => {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState(prevState => ({
      galleryItems: response.data.photos.photo
    }));
  })
}

  componentDidMount() {
    this.showImages('lightningbolt');
  }

  render() {
    return(
      <BrowserRouter>
      <div className="container">
        <Header showPictures={this.showImages}/>
        <Switch>
          <Route exact path="/" render={()=> <Redirect to="/lightnings"/>}/>
          <Route path="/lightnings" render={() => <Gallery data={this.state.galleryItems} title="lightnings"/>}/>
          <Route path="/ocean" render={() => <Gallery data={this.state.galleryItems} title="ocean"/>}/>
          <Route path="/horses" render={() => <Gallery data={this.state.galleryItems} title="horses"/>}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
 }
}

export default App;
