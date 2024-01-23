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
import { SHORTFILM_DURATION } from "../../utils/constants";

function App() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [formSwitch, setFormSwitch] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const [editingSuccessful, setEditingSuccessful] = useState(false);
  const [moviesDatabase, setMoviesDatabase] = useState([]);
  const [userMoviesDatabase, setUserMoviesDatabase] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultNotFound, setSearchResultNotFound] = useState(false);
  const [preloaderOn, setPreloaderOn] = useState(false);
  const navigate = useNavigate();

  function handleError(error) {
    setErrorMessage(error);
    console.log(error);
  }

  function resetForm() {
    setErrorMessage("");
    setFormValues({});
  };

  function switchForm(pathname) {
    setFormSwitch(pathname);
  };

  function getUserProfile() {
    mainApi.getUser()
      .then((user) => {
        setUserProfile(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        handleError(error);
      })
  };

  function handleLogIn(user) {
    setLoading(true);
    setFormValues(user);
    mainApi.authorizeUser(user)
      .then(() => {
        getUserProfile();
        navigate("/movies", { replace: true });
        resetForm();
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  function handleRegister(user) {
    setLoading(true);
    setFormValues(user);
    mainApi.createUser(user)
      .then((user) => {
        handleLogIn(user);
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
    setFormValues({});
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
    setFormValues(user);
    mainApi.patchUser(user)
      .then((user) => {
        setUserProfile(user);
        setEditingSuccessful(true);
        resetForm();
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function matchMovies(movies, keyword, shortFilmsChecked) {
    const regex = new RegExp(keyword, "i");

    return movies.filter((movie) => {
      const matcheskeyword =
        regex.test(movie.nameRU.toLowerCase()) ||
        regex.test(movie.nameEN.toLowerCase());

      if (shortFilmsChecked) {
        return matcheskeyword && movie.duration <= SHORTFILM_DURATION;
      } else {
        return matcheskeyword;
      }
    });
  };

  function handleSearch(moviesDatabase, keyword, shortFilmsChecked, isSearchingNewMovies) {
    const movieslist = matchMovies(moviesDatabase, keyword, shortFilmsChecked);
    setSearchResult(movieslist);

    if (isSearchingNewMovies) {
      const requestStorage = {
        movieslist,
        keyword,
        shortFilmsChecked,
      };
      localStorage.setItem("requeststorage", JSON.stringify(requestStorage));
    }

    if (movieslist.length === 0) {
      setSearchResultNotFound(true);
    }
  }

  function refreshResult(result) {
    if (localStorage.getItem("requeststorage") && result.length === 0) {
      setSearchResultNotFound(true);
      setSearchResult(result);
    } else {
      setSearchResultNotFound(false);
      setSearchResult(result);
    }
  }

  function getMoviesBeatfilm(keyword, shortFilmsChecked) {
    setPreloaderOn(true);
    beatfilmMoviesApi.getMovies()
      .then((moviesDatabase) => {
        handleSearch(moviesDatabase, keyword, shortFilmsChecked, true);
        setMoviesDatabase(moviesDatabase);
        resetForm();
      })
      .catch((error) => {
        handleError(error);
        setSearchResultNotFound(false);
      })
      .finally(() => {
        setPreloaderOn(false);
      })
  };

  function searchMovie(keyword = "", shortFilmsChecked) {
    if (keyword.trim() !== "") {
      setSearchResultNotFound(false);
      if (moviesDatabase.length !== 0) {
        handleSearch(moviesDatabase, keyword, shortFilmsChecked, true)
      } else {
        getMoviesBeatfilm(keyword, shortFilmsChecked);
      }
    }
  };

  function searchUserMovies(keyword = "", shortFilmsChecked) {
    setPreloaderOn(true);
    setSearchResultNotFound(false);
    moviesApi.getMovies()
      .then((moviesDatabase) => {
        handleSearch(moviesDatabase, keyword, shortFilmsChecked)
        resetForm();
      })
      .catch((error) => {
        handleError(error);
        setSearchResultNotFound(false);
      })
      .finally(() => {
        setPreloaderOn(false);
      })
  };

  function getUserMoviesDatabase() {
    moviesApi.getMovies()
      .then((moviesDatabase) => {
        setUserMoviesDatabase(moviesDatabase);
      })
      .catch((error) => {
        handleError(error);
      })
  }

  function saveMovie(movie) {
    moviesApi.postMovie(movie)
      .then((newMovie) => {
        setUserMoviesDatabase([...userMoviesDatabase, newMovie]);
      })
      .catch((error) => {
        handleError(error);
      })
  }

  function deleteMovie(id) {
    const targetMovie = userMoviesDatabase.find((movie) => {
      return movie.id === id;
    })
    moviesApi.deleteMovie(targetMovie._id)
      .then(() => {
        setUserMoviesDatabase((userMoviesDatabase) => {
          return userMoviesDatabase.filter((movie) => {
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
    resetForm();
    mainApi.getUser()
      .then((user) => {
        setUserProfile(user);
        setLoggedIn(true);
        getUserMoviesDatabase();
      })
      .catch(() => {
        setLoggedIn(false);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editingSuccessful) {
      const timer = setTimeout(() => {
        setEditingSuccessful(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [editingSuccessful]);

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
            redirectPath="/"
            loggedIn={loggedIn}
            searchMovie={searchMovie}
            searchResult={searchResult}
            searchResultNotFound={searchResultNotFound}
            refreshResult={refreshResult}
            userMoviesDatabase={userMoviesDatabase}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            errorMessage={errorMessage}
            preloaderOn={preloaderOn} />} />

          <Route path="/saved-movies" element={<ProtectedRoute
            element={SavedMovies}
            redirectPath="/"
            loggedIn={loggedIn}
            searchMovie={searchUserMovies}
            searchResult={searchResult}
            searchResultNotFound={searchResultNotFound}
            refreshResult={refreshResult}
            userMoviesDatabase={userMoviesDatabase}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            errorMessage={errorMessage}
            preloaderOn={preloaderOn} />} />

          <Route path="/profile" element={<ProtectedRoute
            element={Profile}
            redirectPath="/"
            loggedIn={loggedIn}
            editingSuccessful={editingSuccessful}
            errorMessage={errorMessage}
            formValues={formValues}
            handleLogOut={handleLogOut}
            handleEditingUserProfile={handleEditingUserProfile} />} />

          <Route path="/signin" element={<ProtectedRoute
            element={Login}
            redirectPath="/"
            loggedIn={!loggedIn}
            errorMessage={errorMessage}
            formValues={formValues}
            resetForm={resetForm}
            handleLogIn={handleLogIn}
            preloaderOn={preloaderOn}
            formSwitch={formSwitch}
            switchForm={switchForm} />} />

          <Route path="/signup" element={<ProtectedRoute
            element={Register}
            redirectPath="/"
            loggedIn={!loggedIn}
            errorMessage={errorMessage}
            formValues={formValues}
            resetForm={resetForm}
            handleRegister={handleRegister}
            preloaderOn={preloaderOn}
            formSwitch={formSwitch}
            switchForm={switchForm} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
