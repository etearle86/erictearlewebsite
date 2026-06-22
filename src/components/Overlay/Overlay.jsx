import React, { useState } from 'react';
import './Overlay.scss';

const Overlay = ({ handlePrevClick, handleCloseClick, handleNextClick }) => {
    const [currCursorPos, setCurrCursorPos] = useState({ x: 0, y: 0 });
    const [isOverImage, setIsOverImage] = useState(false);

    const handleMouseMove = (ev) => {
        setCurrCursorPos({ x: ev.clientX, y: ev.clientY });

        const img = document.querySelector('.GalleryPage_lightbox img, .Main_imageContainer.currentImage img');
        if (img) {
            const rect = img.getBoundingClientRect();
            const over =
                ev.clientX >= rect.left &&
                ev.clientX <= rect.right &&
                ev.clientY >= rect.top &&
                ev.clientY <= rect.bottom;
            setIsOverImage(over);
        }
    };

    const cursorStyle = {
        '--left': `${currCursorPos.x}px`,
        '--top': `${currCursorPos.y}px`,
    };

    const cursorClass = `Overlay_cursor${isOverImage ? '' : ' is-dark'}`;

    return (
        <div className='Overlay_wrapper' onMouseMove={handleMouseMove}>
            <section className='prev_section' onClick={handlePrevClick}>
                <div className={cursorClass} style={cursorStyle} />
            </section>
            <section className='close_section' onClick={handleCloseClick}>
                <div className={cursorClass} style={cursorStyle} />
            </section>
            <section className='next_section' onClick={handleNextClick}>
                <div className={cursorClass} style={cursorStyle} />
            </section>
        </div>
    );
};

export default Overlay;