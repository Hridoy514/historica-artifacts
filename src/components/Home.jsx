import React from 'react';
import Banner from '../pages/Banner';
import FeaturedArtifacts from '../pages/FeaturedArtifacts';
import ExploreByEra from '../pages/ExploreByEra';
import Testimonials from '../pages/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedArtifacts></FeaturedArtifacts>
            <ExploreByEra></ExploreByEra>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;