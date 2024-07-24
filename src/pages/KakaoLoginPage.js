// src/pages/KakaoLoginPage.js
import React from 'react';
import './KakaoLoginPage.css';

const KakaoLoginPage = () => {
    const clientId = process.env.REACT_APP_JAVASCRIPT_API_KEY; // 카카오 JavaScript 키
    const redirectUri = 'http://localhost:3000/auth'; // Redirect URI

    console.log('Client ID:', clientId); // 환경 변수가 제대로 불러와지는지 확인
    console.log('redirect URI:', redirectUri); // 환경 변수가 제대로 불러와지는지 확인

    const handleLogin = () => {
        const authUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = authUrl;
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>카카오 로그인</h1>
                <button onClick={handleLogin}>
                    카카오 로그인
                </button>
            </div>
        </div>
    );
};

export default KakaoLoginPage;

