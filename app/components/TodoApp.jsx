import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        } , {
          id: 2,
          text: 'Clean the yard'
        } , {
          id: 3,
          text: 'Learn react'
        } , {
          id: 4,
          text: 'Get a job'
        }
      ]
    })
  };

  handleAddTodo(text) {
    alert('new todo: ' + text);
  }

  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    )
  }
}
