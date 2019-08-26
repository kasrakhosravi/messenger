
// global dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChatInput extends Component {

  state = {
    message: '',
  };

  onChange = (e) => {
    this.setState({ message: e.target.value })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitMessage(this.state.message);
    this.setState({ message: '' })
  };

  render() {
    return (
      <form
        action=".."
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={this.onChange}
        />
        <input type="submit" value={'Send'} />
      </form>
    )
  }
}

ChatInput.propsTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
};

export default ChatInput
