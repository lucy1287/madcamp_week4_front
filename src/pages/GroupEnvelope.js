import React from 'react';
import { Link } from 'react-router-dom';
import '../GroupEnvelope.css'; // 스타일 파일을 import 합니다
import envelope1 from '../assets/EnvelopeImages/envelope1.png';
import envelope2 from '../assets/EnvelopeImages/envelope2.png';
import envelope3 from '../assets/EnvelopeImages/envelope3.png';
import envelope4 from '../assets/EnvelopeImages/envelope4.png';
import envelope5 from '../assets/EnvelopeImages/envelope5.png';
import envelope6 from '../assets/EnvelopeImages/envelope6.png';


const groups = [
    { id: 1, name: 'Envelope One' },
    { id: 2, name: 'Envelope Two' },
    { id: 3, name: 'Envelope Three' },
    { id: 4, name: 'Envelope Four' },
    { id: 5, name: 'Envelope Five' },
    { id: 6, name: 'Envelope Six' },
    { id: 7, name: 'Envelope Seven' },
    { id: 8, name: 'Envelope Eight' },
    { id: 9, name: 'Envelope Nine' },
];

const GroupEnvelope = () => {
    // 이미지 배열
    const images = [envelope1, envelope2, envelope3, envelope4, envelope5, envelope6];

    return (
        <div className="my-group-page">
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
            <main className="my-group-page-content">
                <div className="group-list">
                    {groups.map((group) => (
                        <div key={group.id} className="group-card">
                            <img
                                src={images[Math.floor(Math.random() * images.length)]} // 랜덤 이미지 선택
                                alt={group.name}
                                className="group-image"
                            />
                            <h3 className="group-name">{group.name}</h3>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default GroupEnvelope;
