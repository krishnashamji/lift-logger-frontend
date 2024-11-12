// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './features/auth/AuthPage.js';
import HomePage from './features/home/HomePage.js';
import { AuthContext } from './contexts/AuthProvider.js';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route 
          path="/" 
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;



