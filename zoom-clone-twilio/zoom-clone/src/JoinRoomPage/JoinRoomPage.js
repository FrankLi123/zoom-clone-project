import React, {useEffect} from 'react';
import "./JoinRoomPage.css"

import {connect} from "react-redux";

import {setIsRoomHost} from "../store/actions";


const JoinRoomPage = ( props ) => {

    const { setIsRoomHostAction , isRoomHost } = props;

    useEffect(()=>{

        const isRoomHost = new URLSearchParams(window.location.search).get('host');
        
        if( isRoomHost ){

            setIsRoomHostAction(true);
        }
    }, []);

    return (
        <div>
        Join Room Page
        </div>
    )
}

const mapStoreStateToProps = (state) => {

    return {
        ...state,
    };
};

const mapDispatchToProps = (dispath) => {

    return {
        setIsRoomHostAction : (isRoomHost)=> dispath(setIsRoomHost(isRoomHost)),
    };
};


export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomPage);