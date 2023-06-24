import React, {useState} from 'react';

import { connect } from 'react-redux';

import JoinRoomInputs from './JoinRoomInputs';

import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';

import { setConnectOnlyWithAudio } from '../store/actions';

import RoomNotFoundMeesage from './RoomNotFoundMeesage';
const JoinRoomContent = (props) =>{

        const {isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio } = props;

        const [roomIdValue, setRoomIdValue] = useState("");
        const [nameValue, setNameValue] = useState("");
        const[showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);

        return (
            <>
            
                    <JoinRoomInputs 
                    roomIdValue ={roomIdValue}
                    setRoomIdValue ={setRoomIdValue}
                    nameValue = {nameValue}
                    setNameValue = {setNameValue}
                    isRoomHost = {isRoomHost}
                    />

                    <OnlyWithAudioCheckbox 
                        setConnectOnlyWithAudio = {setConnectOnlyWithAudioAction}
                        connectOnlyWithAudio = {connectOnlyWithAudio}
                    />

                    <RoomNotFoundMeesage showRoomNotFoundMessage = {showRoomNotFoundMessage} />
            </>
        );
};


const mapStoreStateToProps = (state) => {

    return {
        ...state,
    };
};

const mapDispatchToProps = (dispath) => {

    return {  
        setConnectOnlyWithAudioAction : (onlyWithAudio)=> dispath(setConnectOnlyWithAudio(onlyWithAudio)),
      };
};


export default connect(mapStoreStateToProps,mapDispatchToProps)(JoinRoomContent);