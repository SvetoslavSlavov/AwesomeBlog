import React from 'react';
import Header from '../modules/header/Navbar';
import Footer from '../modules/footer/Footer';
import AddBlogContainer from '../modules/addBlog/AddBlogContainer';

const AddBlog = () => (
  <React.Fragment>
    <Header title="Awesome Blog" />
    <AddBlogContainer />
    <Footer />
  </React.Fragment>
);

export default AddBlog;
