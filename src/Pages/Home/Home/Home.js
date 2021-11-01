import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    //Added home section are four 
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Category></Category>
            <Review></Review>
        </div>
    );
};

export default Home;