import React from 'react';
import './layout.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
