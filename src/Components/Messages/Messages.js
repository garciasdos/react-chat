import React from 'react';
import "./Messages.css";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import MessagesFooter from "./MessagesFooter/MessagesFooter";
import MessagesBody from "./MessagesBody/MessagesBody";

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageToSend: ''
        }
    };

    setMessageToSend = (value) => {
        this.setState({
            messageToSend: value
        })
    };

    sendData = () => {
        //TODO: this must send data throw websocket
        console.log(this.state.messageToSend);
    };

    resetMessage = () => {
        this.setState({
            messageToSend: ''
        })
    };

    render() {
        return (
            <section className='messages'>
                <MessagesHeader label={this.props.label}/>
                <MessagesBody/>
                <MessagesFooter messageToSend={this.state.messageToSend} onChange={this.setMessageToSend}
                                sendData={this.sendData} resetValue={this.resetMessage}/>
            </section>
        );
    }
};

export default Message;
