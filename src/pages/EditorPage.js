import React, { useState } from 'react';
import '../EditorPage.css';

const EditorPage = () => {
    const [noteText, setNoteText] = useState('');
    const [noteColor, setNoteColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#000000');
    const [backgroundImage, setBackgroundImage] = useState('');
    const postItColors = ['#e1f7d5', '#ffbdbd', '#c9c9ff', '#f1cbff', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
    const textColors = ['#000000', '#333333', '#666666', '#999999', '#FFFFFF', '#000080', '#0000FF', '#008000', '#FF0000', '#A52A2A'];

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
                    style={{ backgroundColor: noteColor, color: textColor }}
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
                    <div className="image-selection">
                        <p>Select Background Image:</p>
                        <div className="images">
                            {['https://assets.codepen.io/881020/dog1.jpg', 'https://assets.codepen.io/881020/dog2.jpg'].map((image, index) => (
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
                    <div className="preview-side" style={{ backgroundColor: noteColor, color: textColor }}>
                        <div className="note-content">
                            {noteText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorPage;
