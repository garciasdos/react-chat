import React from 'react';
import './ConversationsHeader.css';

class ConversationHeader extends React.Component {

    onChangeInput = (e) => {
        this.props.onChange(e.target.value);
    };

    render() {
        return (
            <div className='conversationHeader'>
                <FilterConver onChange={this.onChangeInput} filter={this.props.filter}
                              resetFilter={this.props.resetFilter}/>
            </div>
        );
    }
};

class FilterConver extends React.Component {

    addStyle = () => {
        let style = 'filterConver-button';
        return this.props.filter ? style + ' filterConver-button--remove' : style + ' filterConver-button--search';
    };

    onClickButton = () => {
        if(this.props.filter) {
            this.props.resetFilter();
        }
        this.filterInput.focus()
    };

    render() {
        return (
            <div className='filterConver'>
                <button className={this.addStyle()} onClick={this.onClickButton}></button>
                <input className='filterConver-input' placeholder='Search conversation'
                       value={this.props.filter} onChange={this.props.onChange}
                       ref={(input) => { this.filterInput = input; }} />
            </div>

        );
    }
}

export default ConversationHeader;