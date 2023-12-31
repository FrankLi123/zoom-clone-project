import axios from 'axios';


import {v4 as uuidv4} from "uuid";

import { store } from '../store/store';

import{connect, LocalAudioTrack, LocalVideoTrack} from 'twilio-video';
;
const audioConstraints = {
    video : false,
    audio : true,
}


const videoConstraints = {
    video : {
        width: 640,
        height: 480
    },
    audio : true,
}


export const getTokenFromTwilio = async ( setAccessToken, identity) => {

    const randomId = uuidv4();

    console.log(identity);

    const response = await axios.get(
        `https://zoom-clone-service-5180-dev.twil.io/token-service?identity=${randomId}${identity}`
    );


    const data = response.data;

    if(data.accessToken) {

        setAccessToken( data.accessToken);
    }
}



export const connectToRoom = async(accessToken, roomId= 'test-room', setRoom) => {

    const onlyWithAudio = store.getState().connectOnlyWithAudio;

    const constraints = onlyWithAudio ? audioConstraints : videoConstraints;


    // browser has access to this function - navigator...
    navigator.mediaDevices.getUserMedia( constraints).then( async (stream)=>{

        let tracks;

        // create data track for messages
        const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]); // always have only one audio track at the beginning


        let videoTrack;

        if(!onlyWithAudio){

            videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
            tracks = [audioTrack, videoTrack ]
        }else{

            tracks = [audioTrack]
        }


        const room = await connect(accessToken, { 

            name : roomId,
            tracks

        });

        console.log("succesfully connected to Twilio room");
        setRoom(room);


    }).catch( (err)=>{

        console.log("error occured")
        console.log(err);
    })
}


export const checkIfRoomExists = async (roomId) => {
    
    // const axios = require('axios');

    try{
        const response = await axios.get(
      `https://zoom-clone-service-5180-dev.twil.io/room-exists?roomId=${roomId}`
    );
 
    console.log(response);
    return response.data.roomExists;
    } catch (error) {
        console.error('Error while making the request:', error);
        throw error; // Rethrow the error to handle it at a higher level
    }
}