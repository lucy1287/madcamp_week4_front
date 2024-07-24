// src/pages/MyGroupPage.js
import React, { useState, useEffect } from 'react';
import './MyGroupPage.css'; // 스타일 파일을 import 합니다
import axios from 'axios';

const MyGroupPage = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const user_no = localStorage.getItem('userNo');
                const response = await axios.get(`http://localhost:5000/group/${user_no}`);
                setGroups(response.data);
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
            <header className="my-group-page-header">
                <h1>My Groups</h1>
            </header>
            <main className="my-group-page-content">
                <div className="group-list">
                    {groups.length === 0 ? (
                        <p>No groups found</p>
                    ) : (
                        groups.map((group) => (
                            <div key={group.group_no} className="group-card">
                                <img
                                    src="/folder.png"
                                    alt={group.title}
                                    className="group-image"
                                />
                                <h3 className="group-name">{group.title}</h3>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default MyGroupPage;