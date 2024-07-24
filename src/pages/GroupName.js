import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../GroupName.css';

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
            // 그룹 생성 후 사용자가 속한 그룹을 조회합니다.
            const groupsResponse = await fetch(`http://localhost:5000/group/${userNo}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` // JWT 토큰을 헤더에 포함합니다.
                }
            });

            if (groupsResponse.ok) {
                const groupsData = await groupsResponse.json();
                console.log(groupsData);
                
                // 생성된 그룹의 GROUP_NO를 찾아 리디렉션합니다.

                // null 값을 필터링하여 그룹 리스트를 가져옵니다.
                const groups = groupsData.filter(group => group !== null);

                // 가장 최근에 생성된 그룹을 선택합니다.
                const newGroup = groups[groups.length - 1];
                if (newGroup) {
                    const newGroupNum = newGroup.group_no;
                    navigate(`/groupenvelope/${newGroupNum}`);
                } else {
                    console.error('Newly created group not found in user groups');
                }
            } else {
                console.error('Failed to fetch user groups');
            }
        } else {
            // 오류가 발생한 경우 적절한 처리를 합니다.
            const errorData = await response.json();
            console.error('Failed to create group:', errorData);
        }
    };

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
        </div>
    );
};

export default GroupName;
