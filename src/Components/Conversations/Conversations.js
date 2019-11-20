import React from 'react';
import Conversation from './Conversation/Conversation';
import ConversationsHeader from './ConversationsHeader/ConversationsHeader';
import "./Conversations.css";

class Conversations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    };

    setFilter = (value) => {
        this.setState({
            filter: value
        })
    };

    renderConversations = () => {
        return this.props.data
            .filter(Conver => Conver.name.toLowerCase().includes(this.state.filter))
            .map(Conver =>  <Conversation key={Conver.id} label={Conver.name} id={Conver.id} onClick={this.props.onClick}/>)
    };

    render() {
        return (
            <section className='conversations'>
                <ConversationsHeader onChange={this.setFilter}/>
                <div className='conversations-scroller'>
                    {this.renderConversations()}
                </div>
            </section>
        );
    }
};

export default Conversations;
