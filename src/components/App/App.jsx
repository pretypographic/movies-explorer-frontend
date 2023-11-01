import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true)
  }

  function logout() {
    setLoggedIn(false)
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} login={login} />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile logout={logout} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
