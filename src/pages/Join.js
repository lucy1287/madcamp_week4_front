import React from 'react';
import './Join.css';
import backgroundImage from '../assets/invitation_envelope.webp'; // 이미지를 적절한 경로로 변경하세요

const Join = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const code = event.target.invitationCode.value;
        // 초대 코드 처리 로직을 여기에 추가하세요
        console.log('Invitation Code:', code);
    };

    return (
        <div className="join-page">
            <header className="join-header">
                <div className="logo">Invitation Page</div>
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
                        <input type="text" name="invitationCode" placeholder="Enter your invitation code" className="invitation-input" />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;
