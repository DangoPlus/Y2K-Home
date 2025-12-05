import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import GlitchText from '../components/ui/GlitchText';

const System = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-4 mb-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-black font-orbitron mb-2">
            <GlitchText text="SYSTEM_STATUS" />
          </h1>
          <p className="font-pixel text-xl text-gray-400">OPERATIONAL METRICS</p>
        </div>
        <div className="text-right font-pixel text-green-500 animate-pulse">
            ONLINE: 99.98%
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Hardware Specs */}
        <GlassPanel className="p-6">
            <h2 className="text-2xl font-bold font-orbitron mb-6 text-neon-blue border-b border-neon-blue/30 pb-2">HARDWARE</h2>
            <div className="space-y-4 font-pixel text-lg">
                <div className="flex justify-between">
                    <span className="text-gray-400">CPU LOAD</span>
                    <div className="w-1/2 bg-gray-800 h-6 border border-gray-600">
                        <div className="h-full bg-neon-blue w-[34%] relative overflow-hidden">
                             <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                    <span>34%</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">MEMORY</span>
                    <div className="w-1/2 bg-gray-800 h-6 border border-gray-600">
                        <div className="h-full bg-neon-pink w-[68%]"></div>
                    </div>
                    <span>68%</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-400">TEMP</span>
                    <div className="w-1/2 bg-gray-800 h-6 border border-gray-600">
                        <div className="h-full bg-yellow-500 w-[45%]"></div>
                    </div>
                    <span>45°C</span>
                </div>
            </div>
        </GlassPanel>

        {/* Crew / Team */}
        <GlassPanel className="p-6">
            <h2 className="text-2xl font-bold font-orbitron mb-6 text-neon-pink border-b border-neon-pink/30 pb-2">MAINTENANCE CREW</h2>
            <ul className="space-y-4">
                {[
                    { role: 'SYS_ADMIN', name: 'NEO_Z', status: 'ACTIVE' },
                    { role: 'NET_RUNNER', name: 'GHOST_X', status: 'IDLE' },
                    { role: 'DESIGN_AI', name: 'PIXEL_BOT', status: 'PROCESSING' }
                ].map((member, i) => (
                    <li key={i} className="flex justify-between items-center border border-white/10 p-3 rounded hover:bg-white/5 transition">
                        <div>
                            <div className="font-bold font-orbitron text-sm text-gray-300">{member.role}</div>
                            <div className="font-pixel text-xl text-white">{member.name}</div>
                        </div>
                        <span className="text-xs font-pixel px-2 py-1 border border-white/20 rounded">
                            {member.status}
                        </span>
                    </li>
                ))}
            </ul>
        </GlassPanel>

        {/* Terminal Output */}
         <GlassPanel className="p-4 lg:col-span-2 bg-black font-pixel text-sm md:text-base h-48 overflow-y-auto border-t-4 border-t-gray-500">
            <div className="text-green-500">
                <p>&gt; SYSTEM CHECK...</p>
                <p>&gt; CORE: STABLE</p>
                <p>&gt; VISUALS: RENDERED</p>
                <p>&gt; CONNECTING TO SATELLITE... SUCCESS</p>
                <p>&gt; PING: 12ms</p>
                <p>&gt; _</p>
            </div>
        </GlassPanel>

      </div>
    </div>
  );
};

export default System;
