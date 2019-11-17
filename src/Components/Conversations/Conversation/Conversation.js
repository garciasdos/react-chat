import React from 'react';
import {connect} from 'react-redux';
import {setConverSelected} from './../../../Actions/chatAction';
import "./Conversation.css";

const Conversation = (props) => {
    return (
        <div className='conversation' onClick={() => {
            props.onClick();
            props.dispatch(setConverSelected(props.label, props.id));
        }}>
            <p className='conversation-label'>{props.label}</p>
        </div>
    );
};

const mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps)(Conversation);