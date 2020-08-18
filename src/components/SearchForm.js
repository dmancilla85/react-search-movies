import React, { Component } from 'react';

const API_KEY = 'affb6fa';

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    
    const {inputMovie} = this.state;

    // evita que se ejecute el evento nativo del submit
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}&page=1`)
    .then(res => res.json())
    .then(results => {
      const {Search=[], totalResults="0"} = results;

      console.log({Search, totalResults});
      this.props.onResults(Search);
    });

  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Movie to search" />
          </div>
          <div className="control">
            <button className="button is-info" href="btn">
              Search
              </button>
          </div>
        </div>
      </form>
    );
  }
}