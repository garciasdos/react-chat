import React from 'react';
import Conversation from './Conversation/Conversation';
import "./Conversations.css";

const Conversations = (props) => {
    return (
        <section className='conversations'>
            {props.data.map((Conver) => {
                return <Conversation key={Conver.id} label={Conver.name} id={Conver.id} onClick={props.onClick}/>
            })
            }
        </section>
    );
};

export default Conversations;
