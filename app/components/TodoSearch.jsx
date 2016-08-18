import React from 'react';

export default class TodoSearch extends React.Component {
  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
}
