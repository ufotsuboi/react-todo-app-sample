import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div className="todoList">
        <Todo created_at="2015/05/01 9:00:00">牛乳を買う</Todo>
        <Todo created_at="2015/05/01 9:00:00">パンを買う</Todo>
      </div>
    );
  }
}

export default TodoList;
