import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import Overlay from '../Overlay/Overlay';
import './Main.scss';

const Main = ({ images }) => {
    const {
        threshold,
        currImgIdx,
        setCurrImgIdx,
        isImageSelected,
        setIsImageSelected,
    } = useAppContext();

    const [latestCursorPosition, setLatestCursorPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });
    const [positions, setPositions] = useState([{ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
    }]);
    const [imagesWindow, setImagesWindow] = useState([0]);

    useEffect(() => {
        getImagesWindow(currImgIdx);
    }, [currImgIdx]);

    useEffect(() => {
        getImagesPositions(latestCursorPosition);
    }, [latestCursorPosition]);

    const handleMouseMove = (ev) => {
        let posX = ev.clientX;
        let posY = ev.clientY;

        const distX = Math.abs(latestCursorPosition.x - posX);
        const distY = Math.abs(latestCursorPosition.y - posY);

        if (distX > threshold || distY > threshold) {
            if (distX > threshold * 3 || distY > threshold * 2) {
                setImagesWindow([]);
                setPositions([{ x: 0, y: 0 }]);
            }

            setCurrImgIdx((prevState) => {
                return (prevState + 1) % images.length;
            });

            setLatestCursorPosition({
                x: posX,
                y: posY,
            });
        }
    };

    function getImagesWindow(index) {
        let newImagesWindow = [...imagesWindow];
        if (newImagesWindow.length >= 5) {
            newImagesWindow.pop();
        }
        newImagesWindow.unshift(index);
        setImagesWindow(newImagesWindow);
    }

    const getImagesPositions = (latestPosition) => {
        let newImagesPositions = [...positions];
        if (newImagesPositions.length >= 5) {
            newImagesPositions.pop();
        }
        newImagesPositions.unshift(latestPosition);
        setPositions(newImagesPositions);
    };

    const handlePrevClick = () => {
        setCurrImgIdx((prevState) => {
            return (prevState - 1) % images.length;
        });
    };
    const handleCloseClick = () => {
        setIsImageSelected(false);
    };
    const handleNextClick = () => {
        setCurrImgIdx((prevState) => {
            return (prevState + 1) % images.length;
        });
    };

    return (
        <div
            className='Main_wrapper'
            onMouseMove={isImageSelected ? null : (ev) => handleMouseMove(ev)}
        >
            {isImageSelected && (
                <Overlay
                    handlePrevClick={handlePrevClick}
                    handleCloseClick={handleCloseClick}
                    handleNextClick={handleNextClick}
                    currentImageSrc={images[currImgIdx]}
                />
            )}

            {imagesWindow.map((imageIdx, idx) => {
                if (!positions[idx]) return null;
                let isCurrImg = idx === 0;
                return (
                    <div
                        key={idx}
                        className={`Main_imageContainer ${
                            isImageSelected
                                ? isCurrImg
                                    ? 'currentImage'
                                    : `trailingImage${idx}`
                                : null
                        }`}
                        style={{
                            '--left': `${positions[idx].x}px`,
                            '--top': `${positions[idx].y}px`,
                            '--z': imagesWindow.length - idx,
                        }}
                        onClick={
                            isImageSelected
                                ? () => setIsImageSelected(false)
                                : () => setIsImageSelected(true)
                        }
                    >
                        {currImgIdx >= 0 && (
                            <img src={images[imageIdx]} alt='' loading='lazy' />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Main;