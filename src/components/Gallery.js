import React from 'react';
import GalleryItem from './GalleryItem.js'

const Gallery = (props) => {
  const results = props.data;

  let images = results.map(image => <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>)

  return(
    <div className="photo-container">
      <h2>Images of {props.title}</h2>
      <ul>
        {images}
      </ul>
    </div>
  );
}

export default Gallery;
