import React from 'react';
import PropTypes from 'prop-types';
// import axios untuk mengambil data dari API
import axios from 'axios';

export default class ListMovie extends React.Component {
  // Ubah untuk bisa dapet props
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  // Cara akses propsnya
  // this.props.search

  // Fungsi untuk mengambil data dari API
  fetchMovies() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72'
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Fungsi untuk mencari film
  searchMovies(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=d64465f835d027114fd469afd4e2de72`
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Fungsi ini akan dipanggil setelah render pertama kali
  componentDidMount() {
    console.log('Component did mount');
    // Manggil fungsi fetchMovies
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    // propsnya hanya search
    // props itu berubah ketika kita klik button search
    // state hanya movies

    // prevprops = '' , this.props.search = 'deadpool'
    if (prevProps.search !== this.props.search) {
      this.searchMovies(this.props.search);
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.movies.map((movie, index) => (
          <div key={index} className="card">
            <img
              alt="movie"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div>
              <h5>{movie.title}</h5>
              <p>{movie.overview.slice(0, 120)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ListMovie.propTypes = {
  search: PropTypes.string,
};
