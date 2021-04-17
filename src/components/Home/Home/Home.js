import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer/Footer';
import ChoseServices from '../ChoseServices/ChoseServices/ChoseServices';
import GetInTouch from '../GetInTouch/GetInTouch/GetInTouch';
import Header from '../Header/Header/Header';
import OurServices from '../OurServices/OurServices/OurServices';
import ProApp from '../ProApp/ProApp/ProApp';
import Testimonial from '../Testimonial/Testimonial/Testimonial';
import UseApp from '../UseApp/UseApp/UseApp';
import WhoWeAre from '../WhoWeAre/WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <Header/>
            <WhoWeAre/>
            <UseApp/>
            <ChoseServices/>
            <OurServices/>
            <ProApp/>
            <Testimonial/>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default Home;