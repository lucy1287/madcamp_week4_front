// src/pages/MyGroupPage.js
import React, { useState, useEffect } from 'react';
import './MyGroupPage.css'; // 스타일 파일을 import 합니다
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MyGroupPage.css'; // 스타일 파일을 import 합니다
import folder1 from '../assets/FolderImages/Folder1.png';
import folder5 from '../assets/FolderImages/Folder5.png';

const MyGroupPage = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // 이미지 배열
    const images = [folder1, folder5];

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const user_no = localStorage.getItem('userNo');
                const response = await axios.get(`http://localhost:5000/group/${user_no}`);
                const validGroups = response.data.filter(group => group !== null); // null 값 필터링
                setGroups(validGroups);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchGroups();
    }, []); // 빈 배열을 의존성으로 전달하여 컴포넌트가 처음 렌더링될 때만 호출됨

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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
                            <a href="/mygrouppage">Our paper</a>
                            <a href="#">His/Her paper</a>
                            <a href="#">For me</a>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="my-group-page-content">
                <div className="group-list">


                    {groups.length === 0 ? (
                        <p>No groups found</p>
                    ) : (
                        groups.map((group) => (
                            <Link to={`/groupenvelope/${group.group_no}`} key={group.group_no} className="group-card">
                                <img
                                    src={images[Math.floor(Math.random() * images.length)]} // 랜덤 이미지 선택
                                    alt={group.title}
                                    className="group-image"
                                />
                                <h3 className="group-name">{group.title}</h3>
                            </Link>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default MyGroupPage;