
import React from 'react';


const SingleParticipant = ({identity, lastItem }) => {


    const getParticipantName = (identity) =>{

        return identity;

    }

    return (

        <>
        
        <p className = "participants_paragraph">{getParticipantName(identity)}</p>

        {!lastItem && <span classNaem='participants_separator_line'></span>}
        
        </>

    );
};


// Before get data from Twilio, create some hardcoded data
const participants =[

    {
        identity: 'Marek',


    },
    {
        identity: 'John',

    },
    
    {   identity:'Marya',
    },

    {
        identity: "Kyle",
    }

];



const Participants = () => {

    return (
    
        <div className='participants_container'>
        
            List
            {participants.map( (participant, index) => {

                

                return (

                    <SingleParticipant 
                    
                    // key is a required default argument that
                    key={participant.identity}
                    identity={participant.identity}
                    lastItem={participants.length === index + 1}

                    />

                )

            })}
        </div>
    
    );
};

export default Participants;