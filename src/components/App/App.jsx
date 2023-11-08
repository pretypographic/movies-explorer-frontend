import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
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
    <div className="app">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} logout={logout} />} />
        <Route path="/signin" element={<Login login={login} />} />
        <Route path="/signup" element={<Register login={login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
