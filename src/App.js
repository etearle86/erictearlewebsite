import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { featuredImages } from './assets/data/featured-images';
import MainMobile from './components/MainMobile/MainMobile';

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const App = () => {
    const isMobileView = window.innerWidth <= 767;
    const images = shuffleArray(featuredImages);

    return (
        <div className='App_wrapper'>
            <Footer numImages={images.length} />
            {isMobileView ? (
                <MainMobile images={images} />
            ) : (
                <Main images={images} />
            )}
        </div>
    );
};

export default App;