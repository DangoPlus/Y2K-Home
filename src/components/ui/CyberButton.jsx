import React from 'react';

const CyberButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 font-bold transition-all duration-300 font-orbitron uppercase tracking-wider";

  const variants = {
    primary: "bg-neon-blue/20 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black shadow-[0_0_15px_rgba(0,243,255,0.5)]",
    secondary: "bg-transparent border border-white/30 text-chrome hover:border-neon-pink hover:text-neon-pink hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]",
    ghost: "bg-transparent hover:text-neon-blue"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CyberButton;
