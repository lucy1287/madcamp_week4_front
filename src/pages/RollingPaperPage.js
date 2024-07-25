import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate를 추가로 import
import { initializeGrid } from './RollingPaper';
import '../RollingPaper.css';

const RollingPaperPage = () => {
    const { paper_no } = useParams(); // URL에서 paper_no 추출
    const [letters, setLetters] = useState([]); // 편지 데이터를 저장할 상태 변수
    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅 사용

    useEffect(() => {
        initializeGrid(); // 필요시 그리드 초기화
    }, []);

    useEffect(() => {
        const fetchLetters = async () => {
            try {
                const response = await fetch(`http://localhost:5000/letter?paper_no=${paper_no}`);
                if (!response.ok) {
                    throw new Error('네트워크 응답이 올바르지 않습니다.');
                }
                const data = await response.json();
                setLetters(data); // 가져온 데이터로 상태 업데이트
            } catch (error) {
                console.error('fetch 작업 중 문제가 발생했습니다:', error);
            }
        };

        fetchLetters();
    }, [paper_no]);

    const handleFlip = (e) => {
        const item = e.currentTarget;
        item.classList.toggle('flipped'); // 아이템 플립 효과 토글
    };

    const handleCreateLetter = () => {
        navigate(`/editor/${paper_no}`); // /editor/:paper_no 경로로 이동
    };

    return (
        <div className="rolling-paper-page">
            <h1>롤링 페이퍼 페이지</h1>
            <button onClick={handleCreateLetter} className="create-letter-button">
                글 작성하기
            </button>
            <div className="grid">
                {letters.map((letter, index) => (
                    <div
                        key={index}
                        className="item photo"
                        onClick={handleFlip}>
                        <div className="content">
                            <div className="front"
                                 style={{ backgroundColor: letter.letterColor.color_hex_code }}>
                                <p>{letter.content}</p>
                            </div>
                            <div className="back">
                                {letter.letterBackground.background_url && (
                                    <img
                                        className="photothumb"
                                        src={letter.letterBackground.background_url}
                                        alt={`사진 ${index}`}
                                    />
                                )}
                                <div className="desc">
                                    <p>{letter.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RollingPaperPage;
