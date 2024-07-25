import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../GroupEnvelope.css'; // 스타일 파일을 import 합니다
import envelope1 from '../assets/EnvelopeImages/envelope1.png';
import envelope2 from '../assets/EnvelopeImages/envelope2.png';
import envelope3 from '../assets/EnvelopeImages/envelope3.png';
import envelope4 from '../assets/EnvelopeImages/envelope4.png';
import envelope5 from '../assets/EnvelopeImages/envelope5.png';
import envelope6 from '../assets/EnvelopeImages/envelope6.png';
import axios from 'axios';

const GroupEnvelope = () => {
    const { group_no } = useParams(); // URL 파라미터에서 group_no을 가져옵니다.
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                console.log('Fetching papers for group_no:', group_no);
                const response = await axios.get(`http://localhost:5000/paper?group_no=${group_no}`);
                setPapers(response.data);
                setLoading(false);
            } catch (err) {
                setError(err); // 에러 객체 전체를 상태에 설정
                setLoading(false);
            }
        };

        if (group_no) { // group_no가 있을 때만 API 호출
            fetchPapers();
        }
    }, [group_no]);

    // 이미지 배열
    const images = [envelope1, envelope2, envelope3, envelope4, envelope5, envelope6];

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        // 에러 메시지를 추출하여 사용자에게 보여줍니다
        return <div>에러 발생: {error.message}</div>;
    }

    if (!papers || papers.length === 0) {
        return <div>페이퍼가 없습니다</div>; // 페이퍼를 찾을 수 없는 경우
    }

    return (
        <div className="my-group-page">
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
            <main className="paper-list-page-content">
                <div className="paper-list">
                    {papers.map((paper) => (
                        <Link to={`/rollingpaper/${paper.paper_no}`} key={paper.paper_no} className="group-card">
                            <div key={paper.paper_no} className="paper-card">
                                <img
                                    src={images[Math.floor(Math.random() * images.length)]} // 랜덤 이미지 선택
                                    alt={paper.title}
                                    className="paper-image"
                                />
                                <h3 className="paper-name">{paper.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default GroupEnvelope;
