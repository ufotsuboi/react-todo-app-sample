import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <h1>TODO Application</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
