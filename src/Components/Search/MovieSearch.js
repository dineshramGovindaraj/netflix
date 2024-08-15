// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Footer";
// const MovieSearch = () => {
//   const [movieList, setMovieList] = useState([]);
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const fetchMovies = (searchQuery = "") => {
//     const url = searchQuery
//       ? "https://api.themoviedb.org/3/search/movie?api_key=f2c3310f158447748b6ab32c30eb5340&query=${searchQuery}"
//       : "https://api.themoviedb.org/3/discover/movie?api_key=f2c3310f158447748b6ab32c30eb5340;";

//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((json) => {
//         if (json.results && json.results.length > 0) {
//           setMovieList(json.results);
//           setError(false);
//         } else {
//           setMovieList([]);
//           setError(true); // Set error state if no results are found
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching the movie data:", error);
//         setError(true);
//       });
//   };

//   useEffect(() => {
//     fetchMovies(); // Fetch all movies initially
//   }, []);

//   useEffect(() => {
//     if (query !== "") {
//       fetchMovies(query); // Fetch movies based on search query
//     } else {
//       fetchMovies(); // Fetch all movies if query is empty
//     }
//   }, [query]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (query.trim() !== "") {
//       fetchMovies(query);
//     }
//   };

//   function handleLogout() {
//     localStorage.removeItem("user");
//     navigate("/");
//   }
//   return (
//     <div>
//       <nav>
//         <span>
//           <img
//             width="53"
//             src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
//             alt=""
//             className="nav-img"
//           />
//         </span>
//         <button type="submit" className="btn btn-red " onClick={handleLogout}>
//           logout
//         </button>
//       </nav>

//       <form onSubmit={handleSearch}>
//         <div className="hero-buttons search-btn">
//           <input
//             type="text"
//             placeholder="Search for a movie..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button type="submit" className="btn btn-red ">
//             Search
//           </button>
//         </div>
//       </form>
//       {error ? (
//         <p className="not-found">Movie not found</p>
//       ) : (
//         <div className="movie-grid">
//           {movieList.map((movie) => (
//             <div className="movies-margine">
//               <div key={movie.id} className="movies-card">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                   alt={movie.title}
//                   className="movie-img"
//                 />
//                 <div className="movie-content">
//                   <h2 className="common-colour movie-title">{movie.title}</h2>
//                   <p className="common-colour movie-overview">
//                     {movie.overview}
//                   </p>
//                 </div>
//                 <button className="btn btn-red movie-btn">Watch Movie</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default MovieSearch;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
const MovieSearch = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const fetchMovies = (searchQuery = "") => {
    const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=f2c3310f158447748b6ab32c30eb5340&query=${searchQuery}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=f2c3310f158447748b6ab32c30eb5340`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (json.results && json.results.length > 0) {
          setMovieList(json.results);
          setError(false);
        } else {
          setMovieList([]);
          setError(true); // Set error state if no results are found
        }
      })
      .catch((error) => {
        console.error("Error fetching the movie data:", error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchMovies(); // Fetch all movies initially
  }, []);

  useEffect(() => {
    if (query !== "") {
      fetchMovies(query); // Fetch movies based on search query
    } else {
      fetchMovies(); // Fetch all movies if query is empty
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      fetchMovies(query);
    }
  };

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <div>
      <nav>
        <span>
          <img
            width="53"
            src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            alt=""
            className="nav-img"
          />
        </span>
        <button type="submit" className="btn btn-red " onClick={handleLogout}>
          logout
        </button>
      </nav>
      <form onSubmit={handleSearch}>
        <div className="hero-buttons search-btn">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-red ">
            Search
          </button>
        </div>
      </form>
      {error ? (
        <p className="not-found">Movie not found</p>
      ) : (
        <div className="movie-grid">
          {movieList.map((movie) => (
            <div className="movies-margine">
              <div key={movie.id} className="movies-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-img"
                />
                <div className="movie-content">
                  <h2 className="common-colour movie-title">{movie.title}</h2>
                  <p className="common-colour movie-overview">
                    {movie.overview}
                  </p>
                </div>
                <button className="btn btn-red movie-btn">Watch Movie</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MovieSearch;
