import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        } , {
          id: uuid(),
          text: 'Clean the yard'
        } , {
          id: uuid(),
          text: 'Learn react'
        } , {
          id: uuid(),
          text: 'Get a job'
        }
      ]
    })
  };

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }

  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    )
  }
}
