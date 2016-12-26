import React, { Component } from 'react';

class Todo extends Component {
  handleRemove(e) {
    e.preventDefault();

    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div className="todo">
        <span className="name">{this.props.children}</span>
        <span className="date">{this.props.created_at}</span>
        <button onClick={this.handleRemove.bind(this)}>削除</button>
      </div>
    );
  }
}

export default Todo;
