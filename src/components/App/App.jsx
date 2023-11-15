import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext"
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import beatfilmMoviesApi from "../../utils/BeatfilmMoviesApi";

import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [userMoviesList, setUserMoviesList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultNotFound, setSearchResultNotFound] = useState(false);
  const [preloaderOn, setPreloaderOn] = useState(false);
  const navigate = useNavigate();

  function handleError(error) {
    setError(error);
    console.log(error);
  }

  function getUserProfile() {
    mainApi.getUser()
      .then((user) => {
        setUserProfile(user);
      })
      .catch((error) => {
        handleError(error);
      })
  }

  function handleRegister(user) {
    setLoading(true);
    mainApi.createUser(user)
      .then(() => {
        navigate("/signin", { replace: true });
        setError("");
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function handleLogIn(user) {
    setLoading(true);
    mainApi.authorizeUser(user)
      .then(() => {
        getUserProfile();
        setLoggedIn(true);
        navigate("/movies", { replace: true });
        setError("");
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  function handleLogOut() {
    setLoading(true);
    mainApi.closeUserSession()
      .then(() => {
        setUserProfile({});
        setLoggedIn(false);
        localStorage.removeItem("requeststorage");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  function handleEditingUserProfile(user) {
    setLoading(true);
    mainApi.patchUser(user)
      .then((user) => {
        setUserProfile(user);
        setError("");
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function searchMovies(movies, keywords, shortFilmsChecked) {
    const regex = new RegExp(keywords, "i");

    return movies.filter((movie) => {
      const matchesKeywords =
        regex.test(movie.nameRU.toLowerCase()) ||
        regex.test(movie.nameEN.toLowerCase());

      if (shortFilmsChecked) {
        return matchesKeywords && movie.duration <= 40;
      } else {
        return matchesKeywords;
      }
    });
  };

  function handleSearch(moviesList, keywords, shortFilmsChecked, userList = false) {
    const newSearchResult = searchMovies(moviesList, keywords, shortFilmsChecked);
    setSearchResult(newSearchResult);

    if (!userList) {
      const requestStorage = {
        newSearchResult,
        keywords,
        shortFilmsChecked,
      }
      localStorage.setItem("requeststorage", JSON.stringify(requestStorage));
    }

    if (newSearchResult.length > 0) {
      setSearchResultNotFound(false);
    } else {
      setSearchResultNotFound(true);
    };
  }

  function getMoviesBeatfilm(keywords, shortFilmsChecked) {
    setPreloaderOn(true);
    beatfilmMoviesApi.getMovies()
      .then((moviesList) => {
        handleSearch(moviesList, keywords, shortFilmsChecked);
        setMoviesList(moviesList);
        setError("");
      })
      .catch((error) => {
        handleError(error);
        setSearchResultNotFound(false);
      })
      .finally(() => {
        setPreloaderOn(false);
      })
  };

  function getMovies(keywords = "", shortFilmsChecked) {
    if (keywords.trim() !== "") {
      localStorage.removeItem("requeststorage");
      if (moviesList.length !== 0) {
        handleSearch(moviesList, keywords, shortFilmsChecked)
      } else {
        getMoviesBeatfilm();
      }
    } else {
      return;
    }
  };

  function getUserMovies(keywords = "", shortFilmsChecked) {
    setPreloaderOn(true);
    moviesApi.getMovies()
      .then((moviesList) => {
        handleSearch(moviesList, keywords, shortFilmsChecked, true)
        setError("");
      })
      .catch((error) => {
        handleError(error);
        setSearchResultNotFound(false);
      })
      .finally(() => {
        setPreloaderOn(false);
      })
  };

  function getUserMoviesList() {
    moviesApi.getMovies()
      .then((moviesList) => {
        setUserMoviesList(moviesList);
      })
      .catch((error) => {
        handleError(error);
      })
  }

  function saveMovie(movie) {
    moviesApi.postMovie(movie)
      .then((newMovie) => {
        setUserMoviesList([...userMoviesList, newMovie]);
      })
      .catch((error) => {
        handleError(error);
      })
  }

  function deleteMovie(id) {
    const targetMovie = userMoviesList.find((movie) => {
      return movie.id === id;
    })
    moviesApi.deleteMovie(targetMovie._id)
      .then(() => {
        setUserMoviesList((userMoviesList) => {
          return userMoviesList.filter((movie) => {
            return movie._id !== targetMovie._id;
          })
        });
      })
      .catch((error) => {
        handleError(error);
      })
  }

  useEffect(() => {
    setLoading(true);
    setError("");
    mainApi.getUser()
      .then((user) => {
        setUserProfile(user);
        setLoggedIn(true);
        getUserMoviesList();
      })
      .catch(() => {
        setLoggedIn(false);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="app">
        <main className="main main_alignment_center-center">
          <Preloader preloaderOn={loading} />
        </main>
      </div>
    )
  }

  return (
    <UserContext.Provider value={userProfile}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route path="/movies" element={<ProtectedRoute
            element={Movies}
            loggedIn={loggedIn}
            path="/signin"
            error={error}
            getMovies={getMovies}
            searchResult={searchResult}
            searchResultNotFound={searchResultNotFound}
            preloaderOn={preloaderOn}
            userMoviesList={userMoviesList}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie} />} />

          <Route path="/saved-movies" element={<ProtectedRoute
            element={SavedMovies}
            loggedIn={loggedIn}
            path="/signin"
            error={error}
            getMovies={getUserMovies}
            searchResult={searchResult}
            searchResultNotFound={searchResultNotFound}
            preloaderOn={preloaderOn}
            userMoviesList={userMoviesList}
            deleteMovie={deleteMovie} />} />

          <Route path="/profile" element={<ProtectedRoute
            element={Profile}
            loggedIn={loggedIn}
            path="/signin"
            error={error}
            handleLogOut={handleLogOut}
            handleEditingUserProfile={handleEditingUserProfile} />} />

          <Route path="/signin" element={<ProtectedRoute
            element={Login}
            loggedIn={!loggedIn}
            path="/movies"
            error={error}
            handleLogIn={handleLogIn}
            preloaderOn={preloaderOn} />} />

          <Route path="/signup" element={<ProtectedRoute
            element={Register}
            loggedIn={!loggedIn}
            path="/movies"
            error={error}
            handleRegister={handleRegister}
            preloaderOn={preloaderOn} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
