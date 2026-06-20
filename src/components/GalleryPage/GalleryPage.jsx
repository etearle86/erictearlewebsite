import React, { useState } from 'react';
import './GalleryPage.scss';

const GalleryPage = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className='GalleryPage_wrapper'>
            {selectedImage !== null && (
                <div className='GalleryPage_lightbox' onClick={handleClose}>
                    <button className='GalleryPage_prev' onClick={handlePrev}>←</button>
                    <img src={images[selectedImage]} alt='' />
                    <button className='GalleryPage_next' onClick={handleNext}>→</button>
                    <button className='GalleryPage_close' onClick={handleClose}>✕</button>
                </div>
            )}
            <div className='GalleryPage_grid'>
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className='GalleryPage_item'
                        onClick={() => setSelectedImage(idx)}
                    >
                        <img src={image} alt='' loading='lazy' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;