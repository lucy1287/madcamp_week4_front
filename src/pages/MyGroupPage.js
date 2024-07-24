import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

];


const MyGroupPage = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            const user_no = localStorage.getItem('userNo');
            if (!user_no) {
                console.error('User number not found in local storage');
                return;
            }
            try {
                const response = await axios.get(`http://localhost:5000/group/${user_no}`);
                console.log(response.data);
                const validGroups = response.data.filter(group => group !== null); // null 값 필터링
                setGroups(validGroups);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        };

        fetchGroups();
    }, []);

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
                        <div key={group.group_no} className="group-card">
                            <img
                                src={images[Math.floor(Math.random() * images.length)]} // 랜덤 이미지 선택
                                alt={group.title}
                                className="group-image"
                            />
                            <h3 className="group-name">{group.title}</h3>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MyGroupPage;
