import React, {useState} from 'react';

import MicButtonImg from '../../resource/mic.svg';
import MicButtonImgOff from '../../resource/micOff.svg';

const MicButton = ({room}) => {


    const [isMicMuted, setIsMicMuted] = useState(false);


    const handleMicButtonPressed = () =>{

        isMicMuted ? unmute() : mute();

        setIsMicMuted(!isMicMuted);
    }

    const mute = () =>{

        //mute the microsphone and not let other people to hear from us
    }


    const unmute = () =>{

        // other people could hear us talk through mic
    }



    return (
        
        <div className='video_button_container'>
            <img 
                className='video_button_img'
                src={isMicMuted ? MicButtonImgOff : MicButtonImg}
                onClick={handleMicButtonPressed}
            />
        </div>
    
        );
};

export default MicButton;