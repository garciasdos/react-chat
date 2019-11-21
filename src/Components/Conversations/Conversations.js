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

    resetFilter = () => {
        this.setState({
            filter: ''
        })
    };

    renderConversations = () => {
        let conver = this.props.data
            .filter(Conver => Conver.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        if(conver.length > 0) {
            return conver.map(Conver =>  <Conversation key={Conver.id} label={Conver.name} id={Conver.id} onClick={this.props.onClick}/>)
        } else {
            return <NoConvers/>
        }
    };

    render() {
        return (
            <section className='conversations'>
                <ConversationsHeader onChange={this.setFilter} filter={this.state.filter} resetFilter={this.resetFilter}/>
                <div className='conversations-scroller'>
                    {this.renderConversations()}
                </div>
            </section>
        );
    }
};

const NoConvers = () => {
    return(
        <div className='conversations-noConver'>
            <h1>No conversation found</h1>
        </div>
    );
}

export default Conversations;
