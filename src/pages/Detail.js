import React, { Component } from "react";
import Proptypes from "prop-types";

import { Link } from "react-router-dom";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

const API_KEY = "4a5da2dd";

export class Detail extends Component {
  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.object,
      isExact: Proptypes.bool,
      path: Proptypes.string,
      url: Proptypes.string,
    }),
  };

  state = { movie: {} };

  fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log({ movie });
        this.setState({ movie });
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie({ id });
  }

  goBack() {
    window.history.back();
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div id="detail">
        <ButtonBackToHome />
        <h1 className="Title">{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>
          <span className="Subtitle">Actors:</span> {Actors}
        </h3>
        <span className="Subtitle">Metascore:</span>
        <span> {Metascore}</span>
        <p>
          <span className="Subtitle">Plot:</span> {Plot}
        </p>
      </div>
    );
  }
}
