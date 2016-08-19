import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as TodoAPI from 'TodoAPI';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    })
  };

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

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
          text: text,
          completed: false
        }
      ]
    })
  }

  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    this.setState({todos: updatedTodos})
  }

  render() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)} />
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    )
  }
}
