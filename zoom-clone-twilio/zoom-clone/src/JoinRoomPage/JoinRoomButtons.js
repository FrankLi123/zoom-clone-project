import React from 'react';

import {useNavigate} from 'react-router-dom';

const Button = ({buttonText, cancelButton, onClickHandler}) => {

    const buttonClass = cancelButton  ? 'join_room_cancel_button' : 'join_room_success_button';


    return (<button onClick= {onClickHandler} 
            className={buttonClass}>

                {buttonText}

    </button>);


}

const JoinRoomButtons = ({handleJoinToRoom, isRoomHost}) =>{

    const successButtonText = isRoomHost? 'Host' : 'Join';

    const navigate = useNavigate();
    

    const pushToIntroductionPage =()=>{
        navigate('/')
    }
    return(

        <div class="join_room_buttons_container">


        <Button 
            buttonText={successButtonText}
            onClickHandler={handleJoinToRoom}></Button>
        

        <Button buttonText = 'Cancel'
                cancelButton
                onClickHandler={pushToIntroductionPage}>
        </Button>

        </div>
    );
};


export default JoinRoomButtons;