import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate 훅을 사용합니다.
import '../GroupName.css'; // 올바른 경로로 CSS 파일을 import합니다.

const GroupName = () => {
    const [groupName, setGroupName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Group Name:', groupName);

        const userNo = localStorage.getItem('userNo'); // 로컬 스토리지에서 userNo를 가져옵니다.

        // 그룹 생성을 위한 POST 요청을 보냅니다.
        const response = await fetch(`http://localhost:5000/group/create/${userNo}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` // JWT 토큰을 헤더에 포함합니다.
            },
            body: JSON.stringify({
                title: groupName,
                cardinality_yn: 'Y',
            }),
        });

        if (response.ok) {
            // 성공적으로 그룹이 생성되면 GroupEnvelope 페이지로 이동합니다.
            navigate('/GroupEnvelope');
        } else {
            // 오류가 발생한 경우 적절한 처리를 합니다.
            const errorData = await response.json();
            console.error('Failed to create group:', errorData);
        }
    };

    return (
        <div className="group-name-page">
            <h1>Enter Group Name</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Enter the group name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GroupName;
