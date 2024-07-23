import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import backgroundImage from '../assets/mainpage_logo.webp'; // 이미지 경로를 맞추세요

const MainPage = () => {
    const navigate = useNavigate();

    const clientId = process.env.REACT_APP_JAVASCRIPT_API_KEY; // 카카오 JavaScript 키
  const redirectUri = 'http://localhost:3000/auth'; // Redirect URI

  const handleStartClick = () => {
    const authUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
  };

  const [currentSection, setCurrentSection] = useState(0);

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      // Scroll Down
      if (currentSection < 1) {
        setCurrentSection(currentSection + 1);
      }
    } else {
      // Scroll Up
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    const section = document.getElementById(`section-${currentSection}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <div className="main-page" onWheel={handleWheel}>
      <header className="main-header">
        <div className="logo">1 Page</div>
        <nav className="main-nav">
          <a href="#">For him/her</a>
          <a href="#">For us</a>
          <a href="#">Join</a>
          <div className="dropdown">
            <button className="dropbtn">My papers</button>
            <div className="dropdown-content">
              <a href="#">Our paper</a>
              <a href="#">His/Her paper</a>
              <a href="#">For me</a>
            </div>
          </div>
        </nav>
      </header>
      <div id="section-0" className="main-content">
        <img src={backgroundImage} alt="Main Background" />
      </div>
      <div id="section-1" className="scroll-section">
        <p>당신을 / 그를 / 그녀를 / 우리를 위한 </p>
        <p>한 페이지가 될 수 있게</p>
        <button onClick={handleStartClick} className="start-button">시작하기</button>
      </div>
    </div>
  );
};

export default MainPage;
