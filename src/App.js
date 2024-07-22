// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KakaoLoginPage from './pages/KakaoLoginPage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import RollingPaperPage from './pages/RollingPaperPage';
import EditorPage from './pages/EditorPage';  


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kakaoLogin" element={<KakaoLoginPage />} />
          <Route path="/auth" element={<AuthCallbackPage />} />
          <Route path="/rollingpaper" element={<RollingPaperPage />} />
          <Route path="/editor" element={<EditorPage />} /> 
        </Routes>
      </Router>
  );
}

export default App;
