import React from 'react';
import GalleryItem from './GalleryItem.js'
import NoResults from './NoResults.js'


const Gallery = (props) => {
  const results = props.data;
/* If a request to Flickr API returns no images, render a NoResults
 component. Otherwise render returned images */
  if (results.length > 0) {
    let  images = results.map(image => <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} alt={props.data.title}/>)
    return(
      <div className="photo-container">
        <h2>Images of {props.title}</h2>
        <ul>
          {images}
        </ul>
      </div>
    );
  }  else if (results.length === 0) {
      return(<NoResults />);
  }
}

export default Gallery;
