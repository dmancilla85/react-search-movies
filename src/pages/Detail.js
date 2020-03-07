import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome';

const API_KEY = 'affb6fa';

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape(
      {
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
      }
    )
  }

  state = { movie: {} }

  _fetchMovie(id) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie });
        console.log(movie);
      });
  }

  _goBack() {
    //console.log('clicked return')
    window.history.back();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    //console.log(id);
    this._fetchMovie(id);
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot }
      = this.state.movie;
    return (
      <div>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt="Poster" />
        <h3>Starring: {Actors}</h3>
        <span>Metascore: {Metascore}</span>
        <h4><strong>Plot</strong></h4>
        <p>{Plot}</p>
      </div>
    )
  }
}
