import React from 'react';
import {connect} from 'react-redux';
import Conversations from "../Conversations/Conversations";
import {addConversation} from './../../Actions/chatAction';
import "./Chat.css";
import Messages from "../Messages/Messages";

let socket = new WebSocket("ws://192.168.1.18:8080");

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.chatReducer.selected,
            name: this.props.chatReducer.name,
            conversations: this.props.chatReducer.conversations
        }
    }

    distpatchConver = (name, id) => {
        this.props.dispatch(addConversation({name: name, id: id}))
    };

    componentDidMount = () => {
        socket.onopen = () => {
            console.log('Websocket connected!');
        };
        socket.onmessage = (message) => {
            console.log(message);
            const obj = JSON.parse(message.data)
            this.distpatchConver(obj.name, obj.id);
        };
    };

    setChatState = () => {
        const json = JSON.stringify({name: 'pepito', id: 4});
        //socket.send(json);
    };

    sendConversationSelected = () => {
        const conversation = this.props.chatReducer.conversations.find((conver) => {
            return conver.id === this.props.chatReducer.selected;
        });
        return conversation;
    };

    render() {
        return (
            <section className='chat'>
                <Conversations data={this.props.chatReducer.conversations} onClick={this.setChatState}/>
                <Messages conversation={this.sendConversationSelected()}/>
            </section>
        );
    }
}


const MapStateToProps = (state) => {
    return {
        chatReducer: state.chatReducer
    }
};


export default connect(MapStateToProps)(Chat);