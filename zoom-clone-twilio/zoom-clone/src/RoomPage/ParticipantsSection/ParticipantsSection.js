import React from 'react';
import '../RoomPage.css';
import ParticipantsLabel from './ParticipantsLabel';
import Participants from './Participants';




const ParticipantsSection = () => {

    return (
    
        <div className="participants_section_container">

            <ParticipantsLabel />

            <Participants />

        </div>
    );
};

export default ParticipantsSection;