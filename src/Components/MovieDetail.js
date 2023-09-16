import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import CardList from "./CardList";
import "../ui/MovieDetail.css";


function MovieDetail({ id }) {
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=036d88068f82b03c3a1a4e0722b1a8e0&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
    const fetchSimilarMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=036d88068f82b03c3a1a4e0722b1a8e0`
      );
      const data = await response.json();
      setSimilarMovies(data.results);
    };
    fetchSimilarMovies();
  }, [id]);

  if (!movie) {
    return <Spinner />
  }

  return (
    <>
      <div className="movie-detail">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="metadata">
            <div className="metadata-item">
              <span>Release Date:</span>
              <span>{movie.release_date}</span>
            </div>
            <div className="metadata-item">
              <span>Rating:</span>
              <span>{movie.vote_average}/10</span>
            </div>
            <div className="metadata-item">
              <span>Runtime:</span>
              <span>{movie.runtime} min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-movies">
        <h1>Similar Movies</h1>
        <CardList cards={similarMovies} />
      </div>
    </>
  );
}

export default MovieDetail;
