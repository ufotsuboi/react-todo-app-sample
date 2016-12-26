import React, { Component, PropTypes } from 'react';

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

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Todo;
