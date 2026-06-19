import React from 'react';
import './Overlay.scss';

const Overlay = ({ handlePrevClick, handleCloseClick, handleNextClick }) => {
    return (
        <div className='Overlay_wrapper'>
            <button className='Overlay_prev' onClick={handlePrevClick}>←</button>
            <button className='Overlay_close' onClick={handleCloseClick}>✕</button>
            <button className='Overlay_next' onClick={handleNextClick}>→</button>
        </div>
    );
};

export default Overlay;