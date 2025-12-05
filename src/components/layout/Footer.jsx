import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur text-center py-8 relative z-20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-2xl tracking-widest font-orbitron">Y2K</span>
        </div>
        <div className="font-pixel text-gray-500 text-sm">
          COPYRIGHT © 1999-2099 CYBER_CORP INC. <br />
          ALL RIGHTS RESERVED. DESIGNED FOR INTERNET EXPLORER 5.0
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 font-pixel">
          <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition">IG</div>
          <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition">TW</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
