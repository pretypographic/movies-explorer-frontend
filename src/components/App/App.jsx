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
  const [allowedHeader, setAllowedHeader] = useState(true);
  const [allowedFooter, setAllowedFooter] = useState(true);

  function login() {
    setLoggedIn(true);
  };

  function logout() {
    setLoggedIn(false);
  };

  function signalComponents(currentpath) {
    const exceptionpathHeader = ["/signin", "/signup"];
    const exceptionpathFooter = ["/profile", "/signin", "/signup"];

    setAllowedHeader(!exceptionpathHeader.includes(currentpath));
    setAllowedFooter(!exceptionpathFooter.includes(currentpath));
  }

  return (
    <div className="app">
      <Header allowedHeader={allowedHeader} loggedIn={loggedIn} login={login} />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile signalComponents={signalComponents} logout={logout} />} />
        <Route path='/signin' element={<Login signalComponents={signalComponents} />} />
        <Route path='/signup' element={<Register signalComponents={signalComponents} />} />
      </Routes>

      <Footer allowedFooter={allowedFooter} />
    </div>
  );
}

export default App;
