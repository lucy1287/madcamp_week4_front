import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Join.css';
import backgroundImage from '../assets/invitation_envelope.webp'; // 이미지를 적절한 경로로 변경하세요

const Join = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const code = event.target.invitationCode.value;
        console.log(code);
        const userNo = localStorage.getItem('userNo');

        try {
            // POST 요청을 보내서 group_no를 받아옵니다
            const response = await axios.post(`http://localhost:5000/group/join/${userNo}`, { invite_code: code });
            console.log(response);
            const group_no = response.data.group_no;

            // PaperListPage로 리디렉션합니다
            navigate(`/groupenvelope/${group_no}`);
        } catch (error) {
            // 오류가 발생했을 경우 처리합니다
            console.error('초대 코드 처리 중 오류 발생:', error);
            setError('초대 코드 처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="join-page">
            <header className="join-header">
                <div className="logo">1 Page</div>
                <nav className="join-nav">
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
            <div className="join-content">
                <div className="background-image-container">
                    <img src={backgroundImage} alt="Invitation Envelope Background" className="background-image" />
                    <form className="invitation-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="invitationCode"
                            placeholder="Enter your invitation code"
                            className="invitation-input"
                            required
                        />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default Join;