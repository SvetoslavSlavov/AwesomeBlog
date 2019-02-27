import React, { Component } from 'react';
import Header from '../modules/header/Navbar';
import Footer from '../modules/footer/Footer';
import AddBlogContainer from '../modules/addBlog/AddBlogContainer';

class AddBlog extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title={'Awesome Blog'} />
        <AddBlogContainer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AddBlog;
