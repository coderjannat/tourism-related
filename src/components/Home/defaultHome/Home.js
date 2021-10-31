import React from 'react';
import Footer from '../../Footer/Footer';
import GoogleMap from '../../GoogleMap/GoogleMap';
import Winter from '../../Winter/Winter';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Winter></Winter>
            <GoogleMap></GoogleMap>
            <Footer></Footer>

        </div>
    );
};

export default Home;