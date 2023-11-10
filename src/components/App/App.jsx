import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext'

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();

  function login() {
    setLoggedIn(true);
    navigate("/movies", { replace: true });
  };

  function logout() {
    setLoggedIn(false);
    navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider value={userProfile}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<ProtectedRoute
            element={Movies}
            loggedIn={loggedIn}
            path="/signin" />} />
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
