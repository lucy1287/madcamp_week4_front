// src/pages/KakaoLoginPage.js
import React from 'react';

const KakaoLoginPage = () => {
    const clientId = process.env.REACT_APP_JAVASCRIPT_API_KEY; // 카카오 JavaScript 키
    const redirectUri = 'http://localhost:3000/auth'; // Redirect URI

    const handleLogin = () => {
        const authUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = authUrl;
    };

    return (
        <div className="login-page">
            <h1>카카오 로그인</h1>
            <button onClick={handleLogin}>
                카카오 로그인
            </button>
        </div>
    );
};

export default KakaoLoginPage;