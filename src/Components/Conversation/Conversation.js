import React from 'react';
import "./Conversation.css";

const Conversation = (props) => {
    return (
        <div className='conversation' onClick={() => {props.onClick(props.id, props.label)}}>
            <p className='conversation-label'>{props.label}</p>
        </div>
    );
};

export default Conversation;
