import React, { Suspense } from 'react';
import './App.css';
import { Route, Link, Routes, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Login } from 'containers/login';
import { Home } from 'containers/home';
import ProtectedRoute from 'layout/ProtectedRoute';

function App() {
  const { token } = useSelector(state => state?.app)
  return (
    <Suspense fallback="loading">
      <div className="App">
        {!token &&
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        }
        {token &&
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
        }
      </div>
    </Suspense>
  );
}

export default App;
