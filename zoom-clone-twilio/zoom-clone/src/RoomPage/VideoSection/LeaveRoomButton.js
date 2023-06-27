import React,{useState} from 'react';

import CameraButtonImg from '../../resource/camera.svg';
import CameraButtonImgOff from '../../resource/cameraOff.svg';

const LeaveRoomButton = ({room}) => {


    const handleRoomDisconnection = () =>{

        const siteUrl = window.location.origin;
        window.location.href = siteUrl;
    }


    return (
        <div className='video_button_container'>
           <button className="video_button_end"
           onClick={handleRoomDisconnection}>

            Leave Room
           </button>
        </div>
    
        );
};

export default LeaveRoomButton;