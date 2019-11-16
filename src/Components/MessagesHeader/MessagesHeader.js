import React from 'react';
import "./MessagesHeader.css";

const MessagesHeader = (props) => {
    return (
        <header className='messagesHeader'>
            <p> {props.label} </p>
        </header>
    );
};

export default MessagesHeader;
