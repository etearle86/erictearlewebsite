import React from 'react';
import './Footer.scss';
import { useAppContext } from '../../context/AppContext';
import { addZeroesInFront } from '../../utils/functions/functions';
import { useNavigate, useLocation } from 'react-router-dom';

const CATEGORIES = [
    { label: 'Featured', path: '/' },
    { label: 'iPhone', path: '/iphone' },
    { label: 'Film', path: '/film' },
    { label: 'Info', path: '/info' },
];

const Footer = ({ numImages }) => {
    const {
        threshold,
        setThreshold,
        currImgIdx,
        setCurrImgIdx,
        setIsImageSelected,
    } = useAppContext();

    const navigate = useNavigate();
    const location = useLocation();

    const handleCategoryClick = (path) => {
        setCurrImgIdx(-1);
        setIsImageSelected(false);
        navigate(path);
    };

    const handleTitleClick = () => {
        setCurrImgIdx(-1);
        setIsImageSelected(false);
        navigate('/');
    };

    const handleSubtractClick = () => {
        if (threshold <= 0) return;
        setThreshold((prevState) => prevState - 40);
    };

    const handleAddClick = () => {
        if (threshold >= 280) return;
        setThreshold((prevState) => prevState + 40);
    };

    return (
        <div className='Footer_wrapper'>
            <div className='Footer_name' onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                Eric Tearle
            </div>
            <div className='Footer_categoryWrapper'>
                {CATEGORIES.map((cat, idx) => {
                    const isSelected = location.pathname === cat.path;
                    return (
                        <React.Fragment key={cat.label + idx}>
                            <span
                                className={`Footer_category ${isSelected ? 'selected' : ''}`}
                                onClick={() => handleCategoryClick(cat.path)}
                            >
                                {cat.label}
                            </span>
                            {idx < CATEGORIES.length - 1 && ','}&nbsp;
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='Footer_threshold'>
                Threshold:
                <button onClick={handleSubtractClick}>-</button>
                <span>{addZeroesInFront(threshold)}</span>
                <button onClick={handleAddClick}>+</button>
            </div>
            <div className='Footer_imageIndex'>
                {addZeroesInFront(currImgIdx + 1)} /{' '}
                {addZeroesInFront(numImages)}
            </div>
        </div>
    );
};

export default Footer;