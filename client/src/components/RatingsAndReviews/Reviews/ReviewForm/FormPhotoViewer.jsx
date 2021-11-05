import React, {useState} from 'react';
import Modal from '../../../sharedComponents/Modal.jsx';
import PhotoModal from '../PhotoModal.jsx';


const FormPhotoViewer = (props) => {
  const [modalPhoto, setModalPhoto] = useState(false);

   return (
    <div className = 'photos-container'>
      {props.photos.map( (photo, index) => {
        const clickTile = () => {
          const selectedPhoto = (<PhotoModal image = {photo}/>);
          setModalPhoto(<Modal callback = {setModalPhoto} component={selectedPhoto}/>)
        };

        return (<img  onClick = {clickTile}className = 'review-photo' key = {`photo-${index}`}src = {photo}></img>)
      })}
      {modalPhoto}
    </div>
  );
};

export default FormPhotoViewer;