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
    galleryItems: [],
    loading: true,
    titleSearch:""
  }
}

showImages = (tag="lightningbolt") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState(prevState => ({
        galleryItems: response.data.photos.photo,
        loading: false,
      }));
    })
}

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

updateSearchTitle =(searchTitle) => {
  this.setState(prevState=>({titleSearch:searchTitle}));
}

  render() {
    return(
      <BrowserRouter>
      <div className="container">
  {  (this.state.loading)
      ? <h1> Loading...</h1>
      : <Header showPictures={this.showImages} updateTitle={this.updateSearchTitle}/>
      }

        { /*<Header showPictures={this.showImages} />*/}
        <Switch>
          <Route exact path="/" render={()=> <Redirect to="/lightnings"/>  }/>
          <Route path="/lightnings" render={() => <Gallery data={this.state.galleryItems} isloading={this.state.loading} title="lightnings"/>}/>
          <Route path="/waves" render={() => <Gallery data={this.state.galleryItems} isloading={this.state.loading} title="waves"/>}/>
          <Route path="/moon" render={() => <Gallery data={this.state.galleryItems}  isloading={this.state.loading} title="the moon"/>}/>
          <Route path="/search/:name" render={() => <Gallery data={this.state.galleryItems} title={this.state.titleSearch}/>}/>
          <Route component={NotFound}/>
        </Switch>

</div>
      </BrowserRouter>
    );
 }
}

export default App;
