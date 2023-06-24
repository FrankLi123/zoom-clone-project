import React, {useState} from 'react';

import { connect } from 'react-redux';

import JoinRoomInputs from './JoinRoomInputs';

import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';

import { setConnectOnlyWithAudio, setIdentity, setRoomId} from '../store/actions';

import RoomNotFoundMeesage from './RoomNotFoundMeesage';

import JoinRoomButtons from './JoinRoomButtons';

import {useNavigate} from 'react-router-dom';


import {v4 as uuidv4 } from "uuid";


const JoinRoomContent = (props) =>{


        const {isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio, setRoomIdAction, setIdentityAction} = props;

        const [roomIdValue, setRoomIdValue] = useState("");
        const [nameValue, setNameValue] = useState("");
        const[showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);

        const navigate = useNavigate();


        const handleJoinToRoom = async () => {
            //later add logic to this function
        
            setIdentityAction(nameValue);

            if(!isRoomHost){
                
            //check if room exists. If yes, then join the room
            
            }else{
                setRoomIdAction(uuidv4());
                navigate("/room");
            }
        
        };




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

const mapDispatchToProps = (dispatch) => {
        
    return {  
        setConnectOnlyWithAudioAction : (onlyWithAudio)=> dispatch(setConnectOnlyWithAudio(onlyWithAudio)),

        setIdentityAction: (identity)=> dispatch(setIdentity(identity)),

        setRoomIdAction: (id) => dispatch(setRoomId(id)),


    
    };
};


export default connect(mapStoreStateToProps,mapDispatchToProps)(JoinRoomContent);