import React from 'react';


const photos = [
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random'
]

const PhotoTiles = (props) => {
  return (
    <div className = 'photos-container'>
      {props.photos.map( (photo, index) => {
        return (<img className = 'review-photo' key = {`photo-${index}`}src = {photo}></img>)
      })}

    </div>
  );
};

export default PhotoTiles;