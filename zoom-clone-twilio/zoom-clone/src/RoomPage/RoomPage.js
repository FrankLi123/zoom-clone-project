import React, {useEffect,useState} from 'react';
import "./RoomPage.css"

import ParticipantsSection from './ParticipantsSection/ParticipantsSection';

import ChatSection from './ChatSection/ChatSection'; 

import VideoSection from './VideoSection/VideoSection';

import {connect} from "react-redux";

import { setTwilioAccessToken } from '../store/actions';

import { getTokenFromTwilio } from '../utils/twilioUtils';

import { store } from '../store/store';


const RoomPage = (props) => {

// receive the token info from 'props'

    const {identity, setTwilioAccessTokenAction} = props;

    useEffect (()=>{

        getTokenFromTwilio(setTwilioAccessTokenAction, identity);

    }, []);
        


    return (

        <div className="room_container">
        
            <ParticipantsSection />

            <VideoSection />

            <ChatSection />

        </div>
    );
};


const mapStoreStateToProps = (state)=>{

        return {
            ...state,
        };
};

const mapActionsToProps =(dispatch)=>{

    return {

        setTwilioAccessTokenAction : (token) => dispatch(setTwilioAccessToken(token))

    }
}

export default connect(mapActionsToProps, mapActionsToProps)(RoomPage);