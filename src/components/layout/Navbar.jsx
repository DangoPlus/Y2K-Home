import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'DATA', path: '/data' },
    { label: 'VISUALS', path: '/visuals' },
    { label: 'SYSTEM', path: '/system' },
    { label: 'CONNECT', path: '/connect' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center border-b border-white/10 glass-panel rounded-b-2xl mx-4 mt-2 max-w-[calc(100%-2rem)] left-0 right-0 mx-auto">
      <NavLink to="/" className="flex items-center gap-2 group">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping group-hover:bg-neon-blue"></div>
        <span className="text-xl font-bold tracking-tighter font-orbitron">
          CYBER<span className="text-neon-blue">CORE</span>
        </span>
      </NavLink>

      <nav className="hidden md:flex gap-8 font-pixel text-xl">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              hover:text-neon-blue hover:underline decoration-2 underline-offset-4 transition-colors
              ${isActive ? 'text-neon-blue underline' : 'text-chrome'}
            `}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="font-pixel text-lg text-gray-400 border border-gray-600 px-2 rounded">
        USER: GUEST_01
      </div>
    </header>
  );
};

export default Navbar;
