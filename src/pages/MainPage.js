import React from 'react';
import './MainPage.css';
import backgroundImage from '../assets/mainpage_logo.webp'; // 이미지 경로를 맞추세요

const MainPage = () => {
  return (
    <div className="main-page">
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
      <div className="main-content">
        <img src={backgroundImage} alt="Main Background" />
      </div>
    </div>
  );
};

export default MainPage;
