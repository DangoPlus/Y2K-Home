import React, { useState } from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import GlitchText from '../components/ui/GlitchText';
import CyberButton from '../components/ui/CyberButton';

const Connect = () => {
  const [formData, setFormData] = useState({
    user: '',
    frequency: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('TRANSMISSION SENT. AWAITING RESPONSE.');
    setFormData({ user: '', frequency: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-black font-orbitron mb-2">
          <GlitchText text="ESTABLISH_UPLINK" />
        </h1>
        <p className="font-pixel text-xl text-gray-400">SEND ENCRYPTED MESSAGE TO ADMIN</p>
      </div>

      <GlassPanel className="p-8 border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-pixel text-neon-blue mb-2 text-lg">USER_ID</label>
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="w-full bg-black/50 border border-gray-600 p-3 text-white font-orbitron focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition"
              placeholder="ENTER ALIAS..."
              required
            />
          </div>

          <div>
            <label className="block font-pixel text-neon-pink mb-2 text-lg">FREQUENCY (SUBJECT)</label>
            <input
              type="text"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full bg-black/50 border border-gray-600 p-3 text-white font-orbitron focus:border-neon-pink focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,255,0.3)] transition"
              placeholder="TOPIC..."
              required
            />
          </div>

          <div>
            <label className="block font-pixel text-chrome mb-2 text-lg">DATA_PACKET</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-black/50 border border-gray-600 p-3 text-white font-mono focus:border-white focus:outline-none transition"
              placeholder="TYPE MESSAGE HERE..."
              required
            ></textarea>
          </div>

          <div className="flex justify-end pt-4">
             <CyberButton type="submit">TRANSMIT</CyberButton>
          </div>
        </form>
      </GlassPanel>

      <div className="mt-8 text-center font-pixel text-gray-500 text-sm">
        WARNING: UNSECURE CONNECTIONS WILL BE TERMINATED. <br/>
        ENCRYPTION LEVEL: 256-BIT
      </div>
    </div>
  );
};

export default Connect;
