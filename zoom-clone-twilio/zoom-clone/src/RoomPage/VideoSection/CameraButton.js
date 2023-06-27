import React,{useState} from 'react';

import CameraButtonImg from '../../resource/camera.svg';
import CameraButtonImgOff from '../../resource/cameraOff.svg';

const CameraButton = ({room}) => {


    const[isLocalVideoTrackDisabled, setIsLocalVideoTrackDisabled] = useState(false);

    const handleCameraButtonPressed = () =>{

        isLocalVideoTrackDisabled ? startVideo() : stopVideo();

        setIsLocalVideoTrackDisabled(!isLocalVideoTrackDisabled);
    }

    const startVideo = () => {

    }

    const stopVideo = () =>{


    }

    return (
        <div className='video_button_container'>
            <img 
                className='video_button_image'
                onClick={handleCameraButtonPressed}
                src={ isLocalVideoTrackDisabled ? CameraButtonImgOff : CameraButtonImg}
            />
        </div>
    
        );
};

export default CameraButton;