import React from 'react';
import { Link } from 'react-router-dom';
import '../GroupEnvelope.css'; // CSS 파일을 올바른 경로로 import합니다.

const GroupEnvelope = () => {
    return (
        <div>
            <header className="main-header">
                <div className="logo">1 Page</div>
                <nav className="main-nav">
                    <a href="#">For him/her</a>
                    <Link to="/groupname">For us</Link>
                    <Link to="/join">Join</Link>
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
            <div className="group-envelope-page">
                <h1>Group Envelope</h1>
                {/* 여기에 필요한 추가 콘텐츠를 작성할 수 있습니다. */}
            </div>
        </div>
    );
};

export default GroupEnvelope;
