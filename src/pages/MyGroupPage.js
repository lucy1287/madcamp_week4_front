import React from 'react';
import { Link } from 'react-router-dom';
import './MyGroupPage.css'; // 스타일 파일을 import 합니다
import folder1 from '../assets/FolderImages/Folder1.png';
import folder2 from '../assets/FolderImages/Folder2.png';
import folder3 from '../assets/FolderImages/Folder3.png';
import folder4 from '../assets/FolderImages/Folder4.png';
import folder5 from '../assets/FolderImages/Folder5.png';
import folder6 from '../assets/FolderImages/Folder6.png';
import folder7 from '../assets/FolderImages/Folder7.png';
import folder8 from '../assets/FolderImages/Folder8.png';

const groups = [
    { id: 1, name: 'Group One' },
    { id: 2, name: 'Group Two' },
    { id: 3, name: 'Group Three'},
    { id: 4, name: 'Group Four' },
    { id: 5, name: 'Group Five' },
    { id: 6, name: 'Group Six' },
    { id: 7, name: 'Group Seven' },
    { id: 8, name: 'Group Eight' },
    { id: 9, name: 'Group Nine' },
];

const MyGroupPage = () => {
    // 이미지 배열
    const images = [folder1, folder2, folder3, folder4, folder5, folder6, folder7, folder8];

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

export default MyGroupPage;
