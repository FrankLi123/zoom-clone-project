
import React,{useState} from 'react';

import SendMessageButton from '../../resource/sendMessageButton.svg'

const NewMessage = () => {


    const [message, setMessage] = useState("");


    const handleTextChange = (event) => {

        setMessage(event.target.value);

    }


    const sendMessage = () => {

        // send message to other users

        setMessage('');
    }


    const handleKeyPressed = (event) => {

        if(event.key === 'Enter'){

            event.preventDefault();

            // sendMessage to other user
            sendMessage();
        }
    }

    return ( 
        <div className = 'new_message_container'>
            <input className='new_message_input'
            value={message}
            onChange={handleTextChange}
            placeholder={"please type your message:"}
            type='text'
            onKeyDown={handleKeyPressed} />
            <img 
            className='new_message_button'
            src={SendMessageButton}
            onClick={sendMessage}></img>
        </div>
    );
};

export default NewMessage;