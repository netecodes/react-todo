import React from 'react';

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

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  handleAddTodo(text) {
    alert('new todo: ' + text);
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
