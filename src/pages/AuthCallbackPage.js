// src/pages/AuthCallbackPage.js
import React, { useEffect } from 'react';
import axios from 'axios';

const AuthCallbackPage = () => {
    useEffect(() => {
        const getAccessToken = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            const clientId = process.env.REACT_APP_JAVASCRIPT_API_KEY; // 카카오 JavaScript 키
            const redirectUri = 'http://localhost:3000/auth'; // Redirect URI
            let accessToken;
            let userInfo;

            try {
                const response = await axios.post('https://kauth.kakao.com/oauth/token', null, {
                    params: {
                        grant_type: 'authorization_code',
                        client_id: clientId,
                        redirect_uri: redirectUri,
                        code: code,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });

                const {access_token} = response.data;
                accessToken = access_token;
                console.log(access_token)


                // 액세스 토큰을 사용하여 사용자 정보 요청
                const userInfoResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });

                userInfo = userInfoResponse.data;
                console.log(userInfo);
                // 사용자 정보를 로컬 스토리지에 저장하거나 상태 관리
                localStorage.setItem('user', JSON.stringify(userInfo));

                // 홈 페이지로 리다이렉트
                //window.location.href = '/';
            } catch (error) {
                console.error('Error during authentication:', error);
            }

            try {
                // 액세스 토큰을 백엔드 서버로 전송
                const response = await axios.post('http://localhost:5000/user/login', {
                    kakao_id: userInfo.id,
                    nickname: userInfo.properties.nickname,
                    photo: userInfo.properties.profile_image
                });

                // 백엔드에서 반환된 JWT 토큰 저장
                const { token } = response.data;
                localStorage.setItem('jwtToken', token);

                // 홈 페이지로 리다이렉트
                window.location.href = '/mainpage';
            } catch (error) {
                console.error('Error during authentication:', error);
            }
        };

        getAccessToken();
    }, []);

    return (
        <div>
            <h1>로그인 중...</h1>
        </div>
    );
};

export default AuthCallbackPage;

