import React from 'react';
import SearchHero from './OthersDesign/SearchHero';
import MobileApp from './OthersDesign/MobileApp';
import Reviews from './reviews/Reviews';
import About from './OthersDesign/About';
import TwoCart from './OthersDesign/TwoCart';
import Restaurants from './Restaurants.jsx/Restaurants';
import AboutRestaurant from "./OthersDesign/AboutRestaurant";
import Menus from './OthersDesign/Menus';
import AboutTeam from './OthersDesign/AboutTeam';
import Celebration from '../celebration/Celebration';
import Ldb from '../bdl/Ldb';
import OtherInformation from './OthersDesign/OtherInformation';
import MostPopular from './OthersDesign/MostPopular';
//djhfsjkh




const Home = () => {
    return (
      <div>
        <SearchHero />
        <AboutRestaurant />
        <Ldb />
        <Menus />
        <Restaurants />
        <Celebration />

        <OtherInformation />
        <MostPopular />
        <TwoCart />

     
        <About />
        <Reviews />
        <AboutTeam />
        <MobileApp />

   
      </div>
    );
};

export default Home;