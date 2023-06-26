import React, {useEffect, useState} from 'react';
import "./JoinRoomPage.css"

import {connect} from "react-redux";

import {setIsRoomHost} from "../store/actions";

import JoinRoomTitle from "./JoinRoomTitle"


import JoinRoomContent from './JoinRoomContent';
import LoadingOverlay from './LoadingOverlay';
const JoinRoomPage = ( props ) => {

    const { setIsRoomHostAction , isRoomHost } = props;
    

    useEffect(()=>{

        const isRoomHost = new URLSearchParams(window.location.search).get('host');
        
        if( isRoomHost ){

            setIsRoomHostAction(true);
        }
    }, []);


    const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);


    return (
        <div className = 'join_room_page_container'>
            <div className= 'join_room_page_panel'>

                <JoinRoomTitle isRoomHost={isRoomHost} />
                <JoinRoomContent setShowLoadingOverlay={setShowLoadingOverlay}/>
                {showLoadingOverlay && <LoadingOverlay/>}
            </div>
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