import React from 'react';
import "./Messages.css";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import MessagesFooter from "./MessagesFooter/MessagesFooter";
import MessagesBody from "./MessagesBody/MessagesBody";

const Message = (props) => {
    return (
        <section className='messages'>
            <MessagesHeader label={props.label}/>
            <MessagesBody/>
            <MessagesFooter/>
        </section>
    );
};

export default Message;
