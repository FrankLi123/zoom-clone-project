import React, {useState} from 'react';

import { connect } from 'react-redux';

import JoinRoomInputs from './JoinRoomInputs';

import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';

import { setConnectOnlyWithAudio } from '../store/actions';

import RoomNotFoundMeesage from './RoomNotFoundMeesage';

import JoinRoomButtons from './JoinRoomButtons';

const JoinRoomContent = (props) =>{

        const {isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio } = props;

        const [roomIdValue, setRoomIdValue] = useState("");
        const [nameValue, setNameValue] = useState("");
        const[showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);
        const handleJoinToRoom = ()=>{
            //later add logic to this function
        }

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
                    <JoinRoomButtons 
                    isRoomHost={isRoomHost}
                    handleJoinToRoom={handleJoinToRoom}
                    ></JoinRoomButtons>
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