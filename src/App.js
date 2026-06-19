import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { featuredImages } from './assets/data/featured-images';
import MainMobile from './components/MainMobile/MainMobile';

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const images = shuffleArray(featuredImages);
const randomStartIndex = Math.floor(Math.random() * images.length);

const App = () => {
    const isMobileView = window.innerWidth <= 767;

    return (
        <div className='App_wrapper'>
            <Footer numImages={images.length} />
            {isMobileView ? (
                <MainMobile images={images} initialIndex={randomStartIndex} />
            ) : (
                <Main images={images} initialIndex={randomStartIndex} />
            )}
        </div>
    );
};

export default App;