import axios from 'axios';


import {v4 as uuidv4} from "uuid";


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



export const checkIfRoomExists = async (roomId) => {
    
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