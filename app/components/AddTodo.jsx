import React from 'react';

export default class AddTodo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var newTodo = this.refs.todoText.value;

    if (newTodo.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodo);
    } else {
      this.refs.todoText.focus();
    }
  }
  render(){
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="Add new task" />
          <button className="button expanded">Add</button>
        </form>
      </div>
    )
  }
}
