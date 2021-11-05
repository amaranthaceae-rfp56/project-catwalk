import React, {useState} from 'react';
import Modal from '../../sharedComponents/Modal.jsx';
import PhotoModal from './PhotoModal.jsx';




const PhotoTiles = (props) => {

  const [modal, setModal] = useState(false);


  return (
    <div className = 'photos-container'>
      {props.photos.map( (photo, index) => {
        const clickTile = () => {
          const selectedPhoto = (<PhotoModal image = {photo.url}/>);
          setModal(<Modal class = 'photo-tile' callback = {setModal} component={selectedPhoto}/>)
        };

        return (<img onClick = {clickTile} className = 'review-photo' key = {`photo-${index}`}src = {photo.url}></img>)
      })}
      {modal}
    </div>
  );
};

export default PhotoTiles;