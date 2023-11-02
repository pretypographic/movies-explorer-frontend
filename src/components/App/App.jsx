import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allowedFooter, setAllowedFooter] = useState(true);

  function login() {
    setLoggedIn(true)
  }

  function logout() {
    setLoggedIn(false)
  };

  function signalfooter(currentpath) {
    const exceptionparams = ["/profile", "/signin", "/signup"];
    const prohibitfooter = exceptionparams.includes(currentpath);
    setAllowedFooter(!prohibitfooter)
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} login={login} />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile signalfooter={signalfooter} logout={logout} />} />
        <Route path='/signin' element={<Login signalfooter={signalfooter} />} />
        <Route path='/signup' element={<Register signalfooter={signalfooter} />} />
      </Routes>

      <Footer allowedFooter={allowedFooter} />
    </div>
  );
}

export default App;
