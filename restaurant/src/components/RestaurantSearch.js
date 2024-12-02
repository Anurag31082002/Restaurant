import React, { Component } from 'react';

export default class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null
    };
  }

  search(key) {
    console.warn(key);
    fetch(`http://localhost:3000/restaurant?q=${key}`).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        this.setState({ searchData: resp });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant Search</h1>
        <input type="text" onChange={(event) => this.search(event.target.value)} />
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.searchData.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </div>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    );
  }
}