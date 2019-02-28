import React from 'react';
import Header from '../modules/header/Navbar';
import Footer from '../modules/footer/Footer';
import HomeController from '../modules/home/HomeContainer';

const Home = () => (
  <React.Fragment>
    <Header title="Awesome Blog" />
    <HomeController />
    <Footer />
  </React.Fragment>
);

export default Home;
