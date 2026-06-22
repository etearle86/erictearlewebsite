import React, { useState, useEffect, useRef } from 'react';
import './Overlay.scss';

const Overlay = ({ handlePrevClick, handleCloseClick, handleNextClick, currentImageSrc }) => {
    const [currCursorPos, setCurrCursorPos] = useState({ x: 0, y: 0 });
    const [isLight, setIsLight] = useState(false);
    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        if (!currentImageSrc) return;
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = currentImageSrc;
        img.onload = () => {
            imgRef.current = img;
        };
    }, [currentImageSrc]);

    const sampleColour = (x, y) => {
        if (!imgRef.current) return;
        const img = imgRef.current;
        const canvas = canvasRef.current;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgEl = document.querySelector('.GalleryPage_lightbox img, .Main_imageContainer.currentImage img');
        if (!imgEl) return;

        const rect = imgEl.getBoundingClientRect();
        const imgX = Math.floor(((x - rect.left) / rect.width) * img.naturalWidth);
        const imgY = Math.floor(((y - rect.top) / rect.height) * img.naturalHeight);

        if (imgX < 0 || imgY < 0 || imgX >= img.naturalWidth || imgY >= img.naturalHeight) return;

        const [r, g, b] = ctx.getImageData(imgX, imgY, 1, 1).data;
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        setIsLight(luminance < 0.5);
    };

    const handleMouseMove = (ev) => {
        const posX = ev.clientX;
        const posY = ev.clientY;
        setCurrCursorPos({ x: posX, y: posY });
        sampleColour(posX, posY);
    };

    const cursorStyle = {
        '--left': `${currCursorPos.x}px`,
        '--top': `${currCursorPos.y}px`,
    };

    const cursorClass = `Overlay_cursor${isLight ? ' is-light' : ''}`;

    return (
        <div className='Overlay_wrapper' onMouseMove={handleMouseMove}>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
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