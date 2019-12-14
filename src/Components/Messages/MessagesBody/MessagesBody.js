import React from 'react';
import "./MessagesBody.css";

class MessagesBody extends React.Component {
    renderConver = () => {
        return this.props.conversation.length === 0 ? <EmptyConver/> : <Conver conversation={this.props.conversation}/>
    };

    render() {
        return (
            <body className='messagesBody'>
            {this.renderConver()}
            </body>
        );
    }
};

const EmptyConver = () => {
    return (
        <div className='emptyConver'>
            <p className='emptyConver-message'>There is not any message yet</p>
        </div>
    );
};

class Conver extends React.Component {
    renderMsg = () => {
        return this.props.conversation.map((conver) => {
            return conver.fromMe ? <ConverLine data={conver.data} className='converLine-fromMe'/> :
                <ConverLine data={conver.data} className='converLine-fromOther'/>;
        });
    };

    render() {
        return (
            <div className='conver'>
                {this.renderMsg()}
            </div>
        );
    }
}

const ConverLine = (props) => {
    return (
        <div className={props.className}>
            <p>{props.data}</p>
        </div>
    );
}

export default MessagesBody;
