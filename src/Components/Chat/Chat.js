import React from 'react';
import Conversations from "../Conversations/Conversations";
import "./Chat.css";
import Messages from "../Messages/Messages";

const Convers = [{name: 'Juan', id: 1}, {name: 'Pepe', id: 2}, {name: 'Neppe', id: 3}, {name: 'Juan', id: 1}, {name: 'Pepe', id: 2}, {name: 'Neppe', id: 3}, {name: 'Juan', id: 1}, {name: 'Pepe', id: 2}, {name: 'Neppe', id: 3}, {name: 'Juan', id: 1}, {name: 'Pepe', id: 2}, {name: 'Neppe', id: 3}, {name: 'Juan', id: 1}, {name: 'Pepe', id: 2}, {name: 'Neppe', id: 3}];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 0,
            label: 'Mariano'
        }
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
