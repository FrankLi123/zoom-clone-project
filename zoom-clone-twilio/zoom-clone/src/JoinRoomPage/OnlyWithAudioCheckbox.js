import React, {useState} from 'react';

import { connect } from 'react-redux';

import JoinRoomInputs from './JoinRoomInputs';

import CheckImg from "../resource/check.png";


const OnlyWithAudioCheckbox = (props) =>{

    const {connectOnlyWithAudio, setConnectOnlyWithAudio} = props;

    const handleConnectionTypeChange = ()=>{
        setConnectOnlyWithAudio(!connectOnlyWithAudio);
    }
    

    
    return <div className= "checkbox_container">
        <div className="checkbox_connection"
        onClick={handleConnectionTypeChange}>

            {connectOnlyWithAudio && (

                <img className="checkbox_image" src = {CheckImg}></img>
            )}

        </div>

        <p className= "checkbox_container_paragraph"> Only audio </p>

    </div>
};

export default OnlyWithAudioCheckbox;