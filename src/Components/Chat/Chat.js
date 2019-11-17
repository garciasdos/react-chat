import React from 'react';
import Conversations from "../Conversations/Conversations";
import "./Chat.css";
import Messages from "../Messages/Messages";

const Convers = [{name: 'Juan', id: 1}, {name: 'Pepe', id: 2}, {name: 'Neppe', id: 3}, {name: 'Juan', id: 4}, {name: 'Pepe', id: 5}, {name: 'Neppe', id: 6}, {name: 'Juan', id: 7}, {name: 'Pepe', id: 8}, {name: 'Neppe', id: 9}, {name: 'Juan', id: 10}, {name: 'Pepe', id: 11}, {name: 'Neppe', id: 12}, {name: 'Juan', id: 13}, {name: 'Pepe', id: 14}, {name: 'Neppe', id: 15}];
let socket = new WebSocket("ws://192.168.1.18:8080");
class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 0,
            label: 'Mariano'
        }
    }

    componentDidMount() {
        socket.onopen = () => {
            console.log('Websocket connected!');
        };
        socket.onmessage = (message) => {
            console.log(message);
        };
    }

    setChatState = (labelValue, selectedValue) => {
      this.setState({
          selected : labelValue,
          label: selectedValue
      })
    };

    render() {
        return (
            <section className='chat'>
                <Conversations data={Convers} onClick={this.setChatState}/>
                <Messages label={this.state.label}/>
            </section>
        );
    }
}

export default Chat;
