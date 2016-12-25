import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <span className="name">{this.props.children}</span>
        <span className="date">{this.props.created_at}</span>
      </div>
    );
  }
}

export default Todo;
