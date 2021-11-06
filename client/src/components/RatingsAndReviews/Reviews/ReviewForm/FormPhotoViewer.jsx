import React, {useState} from 'react';
import Modal from '../../../sharedComponents/Modal.jsx';
import PhotoModal from '../PhotoModal.jsx';


const FormPhotoViewer = (props) => {
  const [modalPhoto, setModalPhoto] = useState(false);

   return (
    <div className = 'form-photos-container'>
      {props.photos.map( (photo, index) => {
        const clickTile = () => {
          const selectedPhoto = (<PhotoModal image = {photo}/>);
          setModalPhoto(<Modal class = 'form-photo' callback = {setModalPhoto} component={selectedPhoto}/>)
        };

        return (
          <div className = 'photo-thumbnail-container' key = {`photo-${index}`}>
            <div  onClick = {()=>{props.deletePhoto(index)}} value = {`${index}`}style = {{cursor: 'cell'}}className = 'remove-image'>X</div>
            <img  onClick = {clickTile}className = 'form-review-photo' src = {photo}></img>
          </div>
        );
      })}
      {modalPhoto}
    </div>
  );
};

export default FormPhotoViewer;