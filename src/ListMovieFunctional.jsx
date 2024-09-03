/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListMovie2(props) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72'
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fungsi untuk mencari film
  function searchMovies(search) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=d64465f835d027114fd469afd4e2de72`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // render pertama kali : componentDidMount
  useEffect(() => {
    fetchMovies();
  }, []);

  // componentDidUpdate
  useEffect(() => {
    searchMovies(props.search);
  }, [props.search]);

  return (
    <div className="container">
      {movies.map((movie, index) => (
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
