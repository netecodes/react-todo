import React from 'react';

export default class Todo extends React.Component {
  render() {
      var {text, id, completed} = this.props;
    return (
      <div onClick={() => this.props.onToggle(id)}>
        <input type="checkbox" checked={completed} readOnly/>
        {text}
      </div>
    )
  }
}
