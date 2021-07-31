import React from 'react';

import NavBar from '../components/NavBar';
import Watch from '../components/Watch';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import SectionFive from '../components/SectionFive';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Watch />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <Footer />
        </div>
    );
}

export default Home;
