import React, {useState} from 'react';

import { connect } from 'react-redux';

import JoinRoomInputs from './JoinRoomInputs';

import CheckImg from "../resource/check.png";


const RoomNotFoundMeesage = ( showRoomNotFoundMessage ) =>{


    return (

        <div className="room_not_found_container">

            {
                showRoomNotFoundMessage && (

                    <p className="room_not_found_paragraph">
                        Room has not been found. Please try again.
                    </p>
                )
            }
        </div>

    );

}

    export default RoomNotFoundMeesage;