import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KakaoLoginPage from './pages/KakaoLoginPage';
import AuthCallbackPage from "./pages/AuthCallbackPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kakaoLogin" element={<KakaoLoginPage />} />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
        </Routes>
      </Router>
  );
}

export default App;
