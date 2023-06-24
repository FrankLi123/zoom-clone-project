import React from 'react';
import "./IntroductionPage.css"

import logo from "../resource/logo.png"

import ConnectingButtons from './ConnectingButtons';

const IntroductionPage = () => {

    return (

        <div className= "introduction_page_container">

            <div className="introduction_page_panel">

                <img src={logo} className="introduction_page_image"/>

                <ConnectingButtons></ConnectingButtons>
            </div>

        </div>
    )
}

export default IntroductionPage;