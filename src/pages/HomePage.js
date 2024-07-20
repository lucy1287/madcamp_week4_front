// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="home-page">
            <h1>홈 페이지</h1>
            {user ? (
                <div>
                    <h2>안녕하세요, {user.properties.nickname}님!</h2>
                    <img src={user.properties.profile_image} alt="Profile" />
                </div>
            ) : (
                <p>로그인 정보가 없습니다. <a href="/kakaoLogin">카카오 로그인</a></p>
            )}
        </div>
    );
};

export default HomePage;