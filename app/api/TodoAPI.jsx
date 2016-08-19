import $ from 'jquery';

export function setTodos(todos) {
  if($.isArray(todos)) {
    localStorage.setItem('todos', JSON.stringify(todos))
    return todos;
    }
  }

export function getTodos() {
  var stringTodos = localStorage.getItem('todos');
  var todos = [];

  try {
    todos = JSON.parse(stringTodos);
  } catch (e) {

  }

  return $.isArray(todos) ? todos : [];
}
