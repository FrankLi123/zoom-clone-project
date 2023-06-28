
import React, {useState} from 'react';


const RoomLabel = ({roomId }) => {

    return (
        <div className='room_label'>
            <p className='room_label_paragraph'>Id: {roomId}</p>
        </div>
    );
};

export default RoomLabel;