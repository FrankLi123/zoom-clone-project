import React,{useState} from 'react';

import SwtichButtonImg from '../../resource/switchToScreenSharing.svg';

const SwitchToScreenSharingButton = () => {

    const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
    
    
    const handleScreenSHaringEnabling = () => {

        // handle screen sharing
    }
    
    
    return (

    
        <div className= "video_button_container" >
        
        <img
        className='video_button_image'
        src={SwtichButtonImg}
        onClick={handleScreenSHaringEnabling}
        >
        
        </img>
        
        </div>
    
        );
};

export default SwitchToScreenSharingButton;