import React, { Suspense } from 'react';
import './App.css';
import { Route, Link, Routes, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Login } from 'containers/login';
import { Home } from 'containers/home';

function App() {
  const { token } = useSelector(state => state.app)
  return (
    <Suspense fallback="loading">
      <div className="App">
        Hello World
        {!token &&
          <Routes>
            <Route exact path="login" element={<Login />} />
            {/* <Route exact path="*" element={<Navigate to="/" />} /> */}
          </Routes>}
        {token &&
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>}
      </div>
    </Suspense>
  );
}

export default App;
