import React, { Component } from "react";

const API_KEY = "4a5da2dd";

export class SearchForm extends Component {
  state = {
    inputMovie: "",
  };

  handleChange = (e) => {
    this.setState({
      inputMovie: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { inputMovie } = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}
    `)
      .then((res) => res.json())
      .then((result) => {
        const { Search = [] } = result;
        this.props.onResults(Search);
      });
    document.getElementById("Formulario").reset();
  };

  render() {
    return (
      <form id="Formulario" onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this.handleChange}
              type="text"
              placeholder="Try to search Star Wars"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
