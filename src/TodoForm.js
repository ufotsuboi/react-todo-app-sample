import React, { Component, PropTypes } from 'react';

class TodoForm extends Component {
  handleSubmit(e) {
    e.preventDefault();

    // Todoの追加処理
    if (this.input.value !== '') {
      this.props.create(this.input.value.trim());
    }
    // フォームの初期化
    this.input.value = '';
  }

  render() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="TODOを入力..." ref={c => this.input = c} />
        <button type="submit">作成</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  create: PropTypes.func.isRequired,
};

export default TodoForm;
