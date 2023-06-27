
import React, {useState} from 'react';

import {connect} from "react-redux";

import CameraButton from './CameraButton';

import LeaveRoomButton from './LeaveRoomButton';

import SwitchToScreenSharingButton from './SwitchToScreenSharingButton';

import MicButton from './MicButton';


const VideoButtons = (props) => {

    const {room, connectOnlyWIthAudio} = props;
    

    return (
        <div className='video_buttons_container'>

            <MicButton room={room}/>
        
            {!connectOnlyWIthAudio && <CameraButton room={room}/> }

            <LeaveRoomButton room={room}/>

            <SwitchToScreenSharingButton room={room}/>


        </div>
    );
};

const mapStoreStateToProps = (state) => {

    return {
        ...state,
    };
};


export default connect(mapStoreStateToProps)(VideoButtons);