import './App.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MainMobile from './components/MainMobile/MainMobile';
import GalleryPage from './components/GalleryPage/GalleryPage';
import { featuredImages } from './assets/data/featured-images';
import { CATEGORIES } from './assets/data/categories';

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const images = shuffleArray(featuredImages);
const randomStartIndex = Math.floor(Math.random() * images.length);
const isMobileView = window.innerWidth <= 767;

const FeaturedPage = () => (
    isMobileView ? (
        <MainMobile images={images} initialIndex={randomStartIndex} />
    ) : (
        <Main images={images} initialIndex={randomStartIndex} />
    )
);

const PlaceholderPage = ({ title }) => (
    <div style={{ padding: '120px 40px', fontSize: '24px' }}>
        {title} — coming soon
    </div>
);

const galleryPaths = CATEGORIES.map((cat) => cat.path);

const AppContent = () => {
    const location = useLocation();
    const isGallery = galleryPaths.includes(location.pathname);

    return (
        <div className={`App_wrapper${isGallery ? ' App_wrapper--gallery' : ''}`}>
            <Footer numImages={images.length} />
            <Routes>
                <Route path='/' element={<FeaturedPage />} />
                {CATEGORIES.map((cat) => (
                    <Route
                        key={cat.path}
                        path={cat.path}
                        element={<GalleryPage images={images} />}
                    />
                ))}
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;