import React, { useState } from 'react';
import './GalleryPage.scss';

const GalleryPage = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className='GalleryPage_wrapper'>
            {selectedImage !== null && (
                <div className='GalleryPage_lightbox' onClick={() => setSelectedImage(null)}>
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