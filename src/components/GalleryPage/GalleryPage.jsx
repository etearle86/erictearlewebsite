import React, { useState } from 'react';
import './GalleryPage.scss';
import Overlay from '../Overlay/Overlay';

const GalleryPage = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePrev = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className='GalleryPage_wrapper'>
            {selectedImage !== null && (
                <div className='GalleryPage_lightbox'>
                    <Overlay
                        handlePrevClick={handlePrev}
                        handleCloseClick={handleClose}
                        handleNextClick={handleNext}
                        currentImageSrc={images[selectedImage]}
                    />
                    <img src={images[selectedImage]} alt='' />
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