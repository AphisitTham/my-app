// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import WebLayout from './layouts/web';
import Home from './views/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
