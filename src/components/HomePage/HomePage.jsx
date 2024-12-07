import React from 'react';
import Banner from '../Banner/Banner';
import ItemContainer from '../ItemContainer/ItemContainer';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
    return (
        <div className='space-y-[100px] md:space-y-[410px]'>
            <Helmet>
            <title>Home | GadgetHaven</title>
            </Helmet>
            <Banner ></Banner>
            <ItemContainer ></ItemContainer>
            
        </div>
    );
};

export default HomePage;