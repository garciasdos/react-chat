import React from 'react';
import './ConversationsHeader.css';

class ConversationHeader extends React.Component {

    onChangeInput = (e) => {
        this.props.onChange(e.target.value);
    };

    render() {
        return (
            <div className='conversationHeader'>
                <input className='conversationHeader-input' onChange={this.onChangeInput}/>
            </div>
        );
    }
};

export default ConversationHeader;