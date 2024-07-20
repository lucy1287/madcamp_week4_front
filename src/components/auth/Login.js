const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = `http://localhost:3000/oauth`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const Loginpage = () => {

    const handleKakaoLogin = () => {
        window.location.href = kakaoURL; //kakaoURL로 이동

        return (
            <div>
                <button onClick={handleKakaoLogin} className="KakaoButton"></button>
            </div>
        )
    }
}