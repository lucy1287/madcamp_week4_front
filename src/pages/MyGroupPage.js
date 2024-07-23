// src/pages/MyGroupPage.js
import React from 'react';
import './MyGroupPage.css'; // 스타일 파일을 import 합니다

const groups = [
    { id: 1, name: 'Group One' },
    { id: 2, name: 'Group Two' },
    { id: 3, name: 'Group Three' },
    { id: 4, name: 'Group Four' },
];

const MyGroupPage = () => {
    return (
        <div className="my-group-page">
            <header className="my-group-page-header">
                <h1>My Groups</h1>
            </header>
            <main className="my-group-page-content">
                <div className="group-list">
                    {groups.map((group) => (
                        <div key={group.id} className="group-card">
                            <img
                                src="/folder.png"
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