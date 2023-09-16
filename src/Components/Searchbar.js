import { useState, useEffect } from "react";
import tmbd from "../api/tmbd";
import axios from "axios";
import "../ui/Searchbar.css";

function SearchBar({ handleMovies }) {
  const [term, setTerm] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchMovies = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: "bcc4ff10c2939665232d75d8bf0ec093",
          query: term,
        },
      }
    );
    handleMovies(fetchMovies.data.results);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmbd.get("movie/popular");
      handleMovies(data.results);
    };
    fetchMovies();
  }, []);
  return (
    <div className="body">
      <div className="content">
        <h1 className="content-heading">Want to Search Movies Info?</h1>
        <p>
          Welcome to MoviesFo, your ultimate source for all things movies! Our
          website is designed to provide you with the most comprehensive and
          up-to-date information on all the latest movies, from reviews and
          ratings . Our goal at MoviesFo is to help you discover new and exciting movies that you'll love. We believe that
          movies are more than just entertainment - they're a powerful form of
          art that can inspire, educate, and change the world. That's why we're
          passionate about bringing you a wide variety of movies, from
          blockbuster hits to indie gems. Our team of dedicated movie
          enthusiasts is committed to providing you with high-quality, engaging,
          and informative content that will help you make the most of your
          movie-watching experience. We pride ourselves on being your go-to
          resource for all your movie needs. At MoviesFo, we understand that
          watching movies is a social experience.
        </p>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            value={term}
            className="search-bar-input"
          />
          <button className="search-bar-button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
