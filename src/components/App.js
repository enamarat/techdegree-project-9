import React from 'react';
import Header from './Header.js'
import Gallery from './Gallery.js'
import NotFound from './NotFound.js'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import apiKey from '../config.js'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      galleryItems: [],
      loading: true,
      firstLoad: true,
      titleSearch:""
    }
  }

  /* This function sends a request to Flickr API to get
  24 images with corresponding tag*/
  showImages = (tag="lightningbolt") => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState(prevState => ({
          galleryItems: response.data.photos.photo,
          loading: false,
        }));
      })
  }

  /* When page first loads, showImages function is called with a default value*/
  componentDidMount() {
    this.showImages();

    /* After refreshing the page images of a link with class "active" are shown */
    // const links = document.querySelectorAll('.main-nav li a');
    //
    // for (let i=0; i < links.length; i++) {
    //   if (links[i].className==="active" && links[i].innerText!=="Lightnings") {
    //     this.showImages(links[i].innerText);
    //   }
    //   if (links[i].className==="active" && links[i].innerText==="Lightnings") {
    //     this.showImages('lightningbolt');
    //   }
    // }
  }

  /* This function updates the title of images according to value
   of the search input field. It's passed to SearchForm component via props */
  updateSearchTitle =(searchTitle) => {
    this.setState(prevState=>({titleSearch:searchTitle}));
  }

  /* When "handleSubmit" function is called in SearchForm component,
   this function switches loading state to true. It's passed to SearchForm
   component via props */
  updateLoadingStatus = () => {
      this.setState(prevState=>({loading:true}));
  }

  render() {
    return(
      <BrowserRouter>
      {/* If loading state is "true", render "Loading..." message.
      Otherwise render "container" div.*/}
      {  (this.state.loading)
        ? <h1> Loading...</h1>
        : <div className="container">
          <Header showPictures={this.showImages} updateTitle={this.updateSearchTitle} switchLoadingStatus={this.updateLoadingStatus}/>
          {/* If a user types a non-existent route, NotFound component will be rendered*/}
          <Switch>
            <Route exact path="/" render={()=> <Redirect to="/lightnings"/>  }/>
            <Route path="/lightnings" render={() => <Gallery data={this.state.galleryItems} title="lightnings"/>}/>
            <Route path="/waves" render={() => <Gallery data={this.state.galleryItems}  title="waves"/>}/>
            <Route path="/moon" render={() => <Gallery data={this.state.galleryItems}   title="the moon"/>}/>
            <Route path="/search/:name" render={() => <Gallery data={this.state.galleryItems} title={this.state.titleSearch}  />}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      }
      </BrowserRouter>
    );
 }
}

export default App;
