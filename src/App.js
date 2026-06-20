import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MainMobile from './components/MainMobile/MainMobile';
import { featuredImages } from './assets/data/featured-images';

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

const App = () => {
    return (
        <BrowserRouter>
            <div className='App_wrapper'>
                <Footer numImages={images.length} />
                <Routes>
                    <Route path='/' element={<FeaturedPage />} />
                    <Route path='/iphone' element={<PlaceholderPage title='iPhone' />} />
                    <Route path='/film' element={<PlaceholderPage title='Film' />} />
                    <Route path='/info' element={<PlaceholderPage title='Info' />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;