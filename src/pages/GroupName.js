import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../GroupName.css';

const GroupName = () => {
    const [groupName, setGroupName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const userNo = localStorage.getItem('userNo'); // 로컬 스토리지에서 userNo를 가져옵니다.
        const jwtToken = localStorage.getItem('jwtToken');

        if (!jwtToken) {
            setLoading(false);
            setError('JWT token is missing. Please login again.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/group/create/${userNo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}` // JWT 토큰을 헤더에 포함합니다.
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
                        'Authorization': `Bearer ${jwtToken}` // JWT 토큰을 헤더에 포함합니다.
                    }
                });

                if (groupsResponse.ok) {
                    const groupsData = await groupsResponse.json();

                    // null 값을 필터링하여 그룹 리스트를 가져옵니다.
                    const groups = groupsData.filter(group => group !== null);

                    // 가장 최근에 생성된 그룹을 선택합니다.
                    const newGroup = groups[groups.length - 1];
                    if (newGroup) {
                        const newGroupNum = newGroup.group_no;
                        alert("초대코드 : " + newGroup.invite_code);
                        navigate(`/groupenvelope/${newGroupNum}`);
                    } else {
                        setError('Newly created group not found in user groups');
                    }
                } else {
                    setError('Failed to fetch user groups');
                }
            } else {
                // 오류가 발생한 경우 적절한 처리를 합니다.
                const errorData = await response.json();
                setError(`Failed to create group: ${errorData.message || 'Unknown error'}`);
            }
        } catch (err) {
            setError(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <header className="main-header">
                <Link to="/" className="logo-link">
                    <div className="logo">1 Page</div>
                </Link>
                <nav className="main-nav">
                    <Link to="/groupname">For us</Link>
                    <Link to="/join">Join</Link>
                    <Link to="/mygrouppage">Our papers</Link>
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
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default GroupName;
