import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    // NOTE: ここでAjaxを用いてサーバサイドから取得してもよい
    var todos = [
      { id: 'i9tajxy9', name: '牛乳を買う', created_at: '2015/05/01 9:00:00' },
      { id: 'i9ta58tx', name: 'パンを買う', created_at: '2015/05/01 9:00:00' }
    ];

    this.setState({ todos: todos });
  }

  createTodo(name) {
    // NOTE: ここでAjaxを用いてサーバサイドに送信・作成してもよい
    const todo = {
      id: (Date.now() + Math.floor(Math.random() * 999999)).toString(36),
      name: name,
      created_at: (new Date()).toLocaleString()
    };

    this.setState({ todos: this.state.todos.concat([todo]) });
  }

  render() {
    return (
      <div className="todoApp">
        <h1>TODO Application</h1>
        <TodoForm create={this.createTodo.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
