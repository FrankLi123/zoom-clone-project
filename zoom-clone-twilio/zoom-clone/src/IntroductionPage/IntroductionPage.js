import React,{ useEffect} from 'react';
import "./IntroductionPage.css"

import logo from "../resource/logo.png"

import ConnectingButtons from './ConnectingButtons';

import {connect} from "react-redux";

import {setIsRoomHost} from "../store/actions";

const IntroductionPage = ({setIsRoomHostAction} ) => {   // ***

    useEffect(()=>{
       setIsRoomHostAction(false);
    }, []);


    return (

        <div className= "introduction_page_container">

            <div className="introduction_page_panel">

                <img src={logo} className="introduction_page_image"/>

                <ConnectingButtons></ConnectingButtons>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispath) => {

    return {
        setIsRoomHostAction : (isRoomHost)=> dispath(setIsRoomHost(isRoomHost)),
    };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);