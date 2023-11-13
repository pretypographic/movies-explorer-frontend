import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext'
import moviesApi from "../../utils/MoviesApi";

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  function login() {
    setLoggedIn(true);
    navigate("/movies", { replace: true });
  };

  function logout() {
    setLoggedIn(false);
    navigate("/", { replace: true });
  };

  const searchMovies = (movies, keywords) => {
    const regex = new RegExp(keywords, "i");

    return movies.filter(movie => (
      regex.test(movie.nameRU.toLowerCase()) || regex.test(movie.nameEN.toLowerCase())
    ));
  };

  function getMovies(keywords) {
    moviesApi.getMovies()
      .then((moviesList) => {
        const newSearchResult = searchMovies(moviesList, keywords);
        setSearchResult(newSearchResult);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <UserContext.Provider value={userProfile}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<ProtectedRoute
            element={Movies}
            loggedIn={loggedIn}
            path="/signin"
            getMovies={getMovies}
            searchResult={searchResult} />} />
          <Route path="/saved-movies" element={<ProtectedRoute
            element={SavedMovies}
            loggedIn={loggedIn}
            path="/signin" />} />
          <Route path="/profile" element={<ProtectedRoute
            element={Profile}
            loggedIn={loggedIn}
            path="/signin"
            logout={logout} />} />
          <Route path="/signin" element={<ProtectedRoute
            element={Login}
            loggedIn={!loggedIn}
            path="/movies"
            login={login} />} />
          <Route path="/signup" element={<ProtectedRoute
            element={Register}
            loggedIn={!loggedIn}
            path="/movies"
            login={login} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
