import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundScene from '../scene/BackgroundScene';

const Layout = ({ children }) => {
  return (
    <>
      {/* Background Effects */}
      <div className="scanlines"></div>
      <div className="bg-grid"></div>
      <BackgroundScene />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="relative z-10 pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
