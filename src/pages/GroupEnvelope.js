import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../GroupEnvelope.css'; // 스타일 파일을 import 합니다
import envelope1 from '../assets/EnvelopeImages/envelope1.png';
import envelope2 from '../assets/EnvelopeImages/envelope2.png';
import envelope3 from '../assets/EnvelopeImages/envelope3.png';
import envelope4 from '../assets/EnvelopeImages/envelope4.png';
import envelope5 from '../assets/EnvelopeImages/envelope5.png';
import envelope6 from '../assets/EnvelopeImages/envelope6.png';

const GroupEnvelope = () => {
    const { groupNum } = useParams(); // URL 파라미터에서 groupNum을 가져옵니다.
    const [group, setGroup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [nickname, setNickname] = useState('');   

    useEffect(() => {
        const fetchGroup = async () => {
            const userNo = localStorage.getItem('userNo');
            const jwtToken = localStorage.getItem('jwtToken');

            // Local Storage에서 사용자 정보 가져오기
            const userInfo = JSON.parse(localStorage.getItem('user'));
            if (userInfo && userInfo.properties && userInfo.properties.nickname) {
                setNickname(userInfo.properties.nickname);
            } else {
                setError('User information not found in local storage');
                setLoading(false);
                return;
            }

            if (!jwtToken) {
                setError('JWT token is missing. Please login again.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:5000/group/${userNo}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}` // JWT 토큰을 헤더에 포함합니다.
                    }
                });

                if (response.ok) {
                    const groupsData = await response.json();
                    console.log(groupsData);
                    const validGroups = groupsData.filter(g => g !== null); // null 값 필터링
                    const group = validGroups.find(g => g.group_no === parseInt(groupNum));                    
                    setGroup(group);
                } else {
                    setError('Failed to fetch group data');
                }
            } catch (err) {
                setError(`Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchGroup();
    }, [groupNum]);

    // 이미지 배열
    const images = [envelope1, envelope2, envelope3, envelope4, envelope5, envelope6];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!group) {
        return <div>Group not found</div>; // 그룹을 찾지 못한 경우
    }

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
                <div className="group-card">
                    <img
                        src={images[Math.floor(Math.random() * images.length)]} // 랜덤 이미지 선택
                        alt={group.title}
                        className="group-image"
                    />
                    <h3 className="group-name">{nickname}</h3> {/* 사용자 닉네임 표시 */}
                </div>
            </main>
        </div>
    );
};

export default GroupEnvelope;
