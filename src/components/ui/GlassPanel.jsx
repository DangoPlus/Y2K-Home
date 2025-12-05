import React from 'react';

const GlassPanel = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-[10px] border border-white/10 shadow-[0_0_15px_rgba(0,243,255,0.1)] transition-all duration-300
        ${hoverEffect ? 'hover:border-neon-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.3)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
