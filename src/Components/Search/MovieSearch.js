import React, { useState } from "react";
import { movie_list } from "../assets/assets.js";
import Footer from "../Footer.js";
import logo from "../assets/netflix.png";
import { useNavigate } from "react-router-dom";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movie_list);

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  function handleSearch(e) {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    const filtered = movie_list.filter((movie) =>
      movie.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(filtered);
  }

  return (
    <>
      <div className="mov-nav">
        <div className="a">
          <img src={logo} alt="" className="nav-img" />
        </div>
        <div className="b">
          <button
            type="submit"
            onClick={handleLogout}
            className="btn btn-red mov-btn"
          >
            logout
          </button>
        </div>
      </div>
      <div className="hero-buttons search-btn">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="button" className="btn btn-red">
          Search
        </button>
      </div>
      {filteredMovies.length === 0 ? (
        <p className="not-found">Movie not found</p>
      ) : (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movies-margine">
              <div className="movies-card">
                <img src={movie.image} alt={movie.name} className="movie-img" />
                <div className="movie-content">
                  <h2 className="common-colour movie-title">{movie.name}</h2>
                  <p className="common-colour movie-overview">
                    {movie.description}
                  </p>
                </div>
                <button className="btn btn-red movie-btn">Watch Movie</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default MovieSearch;
