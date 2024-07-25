import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../RollingPaper.css'; // 올바른 경로로 CSS 파일을 import합니다.

const RollingPaperPage = () => {
    const navigate = useNavigate();
    const { paper_no } = useParams();
    const [letters, setLetters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(paper_no);


        const fetchLetters = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/letter?paper_no=${paper_no}`);
                if (response.status === 200) {
                    setLetters(response.data);
                    setLoading(false);
                } else {
                    setError(`Error: ${response.status} ${response.statusText}`);
                    setLoading(false);
                }
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        if (paper_no) {
            fetchLetters();
        }
    }, [paper_no]);

    const handleWriteButtonClick = () => {
        navigate('/editor');
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>에러 발생: {error.message}</div>;
    }

    return (
        <div className="rolling-paper-page">
            <h1>Rolling Paper Page</h1>
            <div className="preview-side">
                {letters.map((letter) => (
                    <div className="letter-card" key={letter.id} style={{ backgroundColor: `var(--color-${letter.color_no})` }}>
                        <div className="letter-content">
                            <p>{letter.content}</p>
                        </div>
                        <div className="letter-meta">
                            <span>작성자: {letter.author}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="write-button" onClick={handleWriteButtonClick}>글 작성하기</button>
        </div>
    );
};

export default RollingPaperPage;
