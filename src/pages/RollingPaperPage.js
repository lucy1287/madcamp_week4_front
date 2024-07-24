import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeGrid } from './RollingPaper';
import '../RollingPaper.css'; // 올바른 경로로 CSS 파일을 import합니다.

const RollingPaperPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        initializeGrid();
    }, []);

    const handleFlip = (e) => {
        const item = e.currentTarget;
        item.classList.toggle('flipped');
    };

    const handleWriteButtonClick = () => {
        navigate('/editor');
    };

    return (
        <div className="rolling-paper-page">
            <h1>Rolling Paper Page</h1>
            <div className="grid">
                <div className="item photo" onClick={handleFlip}>
                    <div className="content">
                        <div className="front">
                            <p>Some note content.</p>
                        </div>
                        <div className="back">
                            <img className="photothumb" src="https://assets.codepen.io/881020/dog1.jpg" alt="Dog 1" />
                            <div className="desc">
                                <p>Some description for the photo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more items here */}
                <div className="item photo" onClick={handleFlip}>
                    <div className="content">
                        <div className="front">
                            <p>Some note content.</p>
                        </div>
                        <div className="back">
                            <img className="photothumb" src="https://assets.codepen.io/881020/dog2.jpg" alt="Dog 2" />
                            <div className="desc">
                                <p>Some description for the photo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item photo" onClick={handleFlip}>
                    <div className="content">
                        <div className="front">
                            <p>Some note content.</p>
                        </div>
                        <div className="back">
                            <img className="photothumb" src="https://i.pinimg.com/564x/b1/da/ea/b1daea970a878f2dc429e3ed32a6cb31.jpg" alt="Dog 9" />
                            <div className="desc">
                                <p>Some description for the photo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="write-button" onClick={handleWriteButtonClick}>글 작성하기</button>           
        </div>
    );
};

export default RollingPaperPage;
