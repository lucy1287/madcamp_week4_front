import React, { useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'; // Link 컴포넌트를 사용하기 위해 import
import '../EditorPage.css';

const EditorPage = () => {
    const { paper_no } = useParams();
    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState('#ffffff');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [selectedFont, setSelectedFont] = useState('Nanum GaramYeonGkot');  // 기본 폰트 설정
    const navigate = useNavigate();

    const postItColors = ['#e1f7d5', '#ffbdbd', '#c9c9ff', '#f1cbff', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
    const fonts = [
        'Nanum GaramYeonGkot',
        'Nanum GangBuJangNimChe',
        'Nanum GothicNotGoding',
        'Nanum GomShinChe',
        'Nanum KkotNaeEum',
        'Nanum GipEumBalGeum'
    ];  // 사용할 폰트 리스트

    const handleNoteTextChange = (e) => {
        setNoteText(e.target.value);
    };

    const handleNoteColorChange = (color) => {
        setNoteColor(color);
    };

    const handleBackgroundImageChange = (image, index) => {
        setBackgroundImage(image);
    };

    const handleFontChange = (font) => {
        setSelectedFont(font);
    };

    const convertNewlinesToBr = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const handleSubmit = async () => {
        const user_no = localStorage.getItem("userNo");  // 실제 사용자의 번호로 변경해야 함
        const jwtToken = localStorage.getItem('jwtToken'); // JWT 토큰 가져오기

        const background_no = [
            'https://i.pinimg.com/236x/dd/fa/b1/ddfab1e5d640d64d908a28460141455c.jpg',
            'https://i.pinimg.com/236x/13/62/25/1362258d5fa4a20660ab5ede0ce9c0ed.jpg',
            'https://i.pinimg.com/564x/b1/da/ea/b1daea970a878f2dc429e3ed32a6cb31.jpg',
            'https://i.pinimg.com/236x/93/be/ce/93bece78e7528240f876e3b7483ce336.jpg',
            'https://i.pinimg.com/474x/09/be/14/09be14bc67a40581bb45b751967dd5a0.jpg',
            'https://i.pinimg.com/236x/75/9a/0e/759a0e7be2f7933a6009dedd298f23bb.jpg',
            'https://i.pinimg.com/236x/31/95/01/31950148aee8feb7ac994331b9503f62.jpg',
            'https://i.pinimg.com/236x/6b/90/87/6b90878a333b9bebc9271480bacdda6a.jpg',
            'https://i.pinimg.com/236x/28/6e/9a/286e9ae0dd1b2c9d3c36d455ca8e4500.jpg',
            'https://i.pinimg.com/236x/84/6b/1d/846b1d6c8284437ef3abe300ee6fd1a9.jpg',
            'https://i.pinimg.com/236x/51/8e/08/518e08fd5b3d69371d3d5d7b2a7a2e52.jpg'
        ].indexOf(backgroundImage) + 1; // 백그라운드 인덱스를 1부터 시작하도록 조정

        const color_no = postItColors.indexOf(noteColor) + 1;
        const font_no = fonts.indexOf(selectedFont) + 1;

        console.log(user_no);
        const response = await fetch(`http://localhost:5000/letter/create/${user_no}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}` // JWT 토큰을 헤더에 포함합니다.
            },
            body: JSON.stringify({
                paper_no: paper_no,
                content: noteText,
                background_no: background_no,  // 실제 데이터에 맞게 조정
                color_no: color_no,  // 색상 인덱스를 1부터 시작하도록 조정
                font_no: fonts.indexOf(selectedFont) + 1  // 폰트 인덱스를 1부터 시작하도록 조정
            }),
        });

        if (response.ok) {
            alert('Letter successfully submitted!');
            // Optional: Clear the form or redirect the user
            setNoteText('');
            setNoteColor('#ffffff');
            setBackgroundImage('');
            setSelectedFont('Nanum GaramYeonGkot');

            navigate(`/rollingpaper/${paper_no}`);
        } else {
            alert('Failed to submit note.');
        }
    };

    return (
        <div className="editor-page">
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
            <div className="editor-container">
                <textarea
                    className="note-text"
                    value={noteText}
                    onChange={handleNoteTextChange}
                    style={{ backgroundColor: noteColor, fontFamily: selectedFont }}
                    placeholder="Enter your note here..."
                />
                <div className="controls">
                    <div className="color-selection">
                        <p>Select Note Color:</p>
                        <div className="colors">
                            {postItColors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-swatch ${noteColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleNoteColorChange(color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="font-selection">
                        <p>Select Font:</p>
                        <div className="fonts">
                            {fonts.map((font, index) => (
                                <div
                                    key={index}
                                    className={`font-swatch ${selectedFont === font ? 'selected' : ''}`}
                                    style={{ fontFamily: font }}
                                    onClick={() => handleFontChange(font)}
                                >
                                    {font}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="image-selection">
                        <p>Select Background Image:</p>
                        <div className="images">
                            {[
                                'https://i.pinimg.com/236x/dd/fa/b1/ddfab1e5d640d64d908a28460141455c.jpg',
                                'https://i.pinimg.com/236x/13/62/25/1362258d5fa4a20660ab5ede0ce9c0ed.jpg',
                                'https://i.pinimg.com/564x/b1/da/ea/b1daea970a878f2dc429e3ed32a6cb31.jpg',
                                'https://i.pinimg.com/236x/93/be/ce/93bece78e7528240f876e3b7483ce336.jpg',
                                'https://i.pinimg.com/474x/09/be/14/09be14bc67a40581bb45b751967dd5a0.jpg',
                                'https://i.pinimg.com/236x/75/9a/0e/759a0e7be2f7933a6009dedd298f23bb.jpg',
                                'https://i.pinimg.com/236x/31/95/01/31950148aee8feb7ac994331b9503f62.jpg',
                                'https://i.pinimg.com/236x/6b/90/87/6b90878a333b9bebc9271480bacdda6a.jpg',
                                'https://i.pinimg.com/236x/28/6e/9a/286e9ae0dd1b2c9d3c36d455ca8e4500.jpg',
                                'https://i.pinimg.com/236x/84/6b/1d/846b1d6c8284437ef3abe300ee6fd1a9.jpg',
                                'https://i.pinimg.com/236x/51/8e/08/518e08fd5b3d69371d3d5d7b2a7a2e52.jpg'
                            ].map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Background ${index}`}
                                    className={backgroundImage === image ? 'selected' : ''}
                                    onClick={() => handleBackgroundImageChange(image, index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="note-preview">
                    <div className="preview-side" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                    <div className="preview-side" style={{ backgroundColor: noteColor, fontFamily: selectedFont }}>
                        <div className="note-content">
                            {convertNewlinesToBr(noteText)}
                        </div>
                    </div>
                </div>
                <button onClick={handleSubmit} className="submit-button">
                    Submit Note
                </button>
            </div>
        </div>
    );
};

export default EditorPage;
