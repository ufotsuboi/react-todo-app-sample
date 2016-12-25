import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map(todo => {
      return <Todo key={todo.id} created_at={todo.created_at}>{todo.name}</Todo>;
    });

    return (
      <div className="todoList">
        {todos}
      </div>
    );
  }
}

export default TodoList;
