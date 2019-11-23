import React from 'react';
import "./MessagesFooter.css";

class MessagesFooter extends React.Component {

    execSendData = () => {
        this.props.sendData();
        this.props.resetValue();
    };
    onPressButton = () => {
        this.execSendData();
    };

    onChangeInput = (e) => {
        this.props.onChange(e.target.value);
    };

    onKeyDownInput = (e) => {
        if (e.keyCode === 13 && this.props.messageToSend !== '') {
            this.execSendData()
        }
    };

    render() {
        return (
            <footer className='messagesFooter'>
                <input type='text' value={this.props.messageToSend} placeholder='Type a message'
                       className='messagesFooter-input'
                       onChange={this.onChangeInput} onKeyDown={this.onKeyDownInput}/>
                <button className='messagesFooter-button' onClick={this.onPressButton}></button>
            </footer>
        );
    };
}

export default MessagesFooter;
