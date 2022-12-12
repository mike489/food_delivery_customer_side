import React from 'react';
import HomePage from './pages/home-page/home-page';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import {Routes, Route} from "react-router-dom";

import './App.scss';

function App() {
  return (
      <Routes>
        <Route element={<SignIn />} path='/sign-in' exact={true} />
        <Route element={<SignUp />} path='/sign-up' exact={true} />
        <Route element={<HomePage />} path='/' exact={true} />
      </Routes>
  );
}

export default App;
