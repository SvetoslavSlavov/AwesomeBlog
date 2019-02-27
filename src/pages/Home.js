import React, { Component } from 'react';
import Header from '../modules/header/Navbar';
import Footer from '../modules/footer/Footer';
import HomeController from '../modules/home/HomeContainer';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title={'Awesome Blog'} />
        <HomeController />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
