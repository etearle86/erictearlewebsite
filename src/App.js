import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { featuredImages } from './assets/data/featured-images';
import MainMobile from './components/MainMobile/MainMobile';

const App = () => {
    const isMobileView = window.innerWidth <= 767;

    console.log(isMobileView);

 return (
    <div className='App_wrapper'>
        <Footer numImages={featuredImages.length} />
        {isMobileView ? (
            <MainMobile images={featuredImages} />
        ) : (
            <Main images={featuredImages} />
        )}
    </div>
);
};

export default App;
