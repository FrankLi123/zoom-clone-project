import React from 'react';
import "./RoomPage.css"

import ParticipantsSection from './ParticipantsSection/ParticipantsSection';

import ChatSection from './ChatSection/ChatSection'; 

import VideoSection from './VideoSection/VideoSection';

const RoomPage = () => {

    return (

        <div className="room_container">
        
            <ParticipantsSection />

            <VideoSection />

            <ChatSection />

        </div>
    );
};

export default RoomPage;