import React, { useState } from 'react';
import '../EditorPage.css';

const EditorPage = () => {
    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#000000');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [selectedFont, setSelectedFont] = useState('Nanum GaramYeonGkot');  // 기본 폰트 설정

    const postItColors = ['#e1f7d5', '#ffbdbd', '#c9c9ff', '#f1cbff', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
    const textColors = ['#000000', '#333333', '#666666', '#999999', '#FFFFFF', '#000080', '#0000FF', '#008000', '#FF0000', '#A52A2A'];
    const fonts = [
        'Nanum GaramYeonGkot', 
        'Pretendard', 
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

    const handleTextColorChange = (color) => {
        setTextColor(color);
    };

    const handleBackgroundImageChange = (image) => {
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

    return (
        <div className="editor-page">
            <header>
                <button className="back-button">←</button>
                <h1>Editor</h1>
                <button className="next-button">Next</button>
            </header>
            <div className="editor-container">
                <textarea
                    className="note-text"
                    value={noteText}
                    onChange={handleNoteTextChange}
                    style={{ backgroundColor: noteColor, color: textColor, fontFamily: selectedFont }}
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
                    <div className="text-color-selection">
                        <p>Select Text Color:</p>
                        <div className="colors">
                            {textColors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`color-swatch ${textColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleTextColorChange(color)}
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
                                    onClick={() => handleBackgroundImageChange(image)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="note-preview">
                    <div className="preview-side" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                    <div className="preview-side" style={{ backgroundColor: noteColor, color: textColor, fontFamily: selectedFont }}>
                        <div className="note-content">
                            {convertNewlinesToBr(noteText)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorPage;
