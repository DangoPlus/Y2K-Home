import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import GlitchText from '../components/ui/GlitchText';

const Data = () => {
  const logs = [
    { id: 'LOG_04', date: '2099-12-31', title: 'SYSTEM_OVERRIDE_INITIATED', content: 'Core mainframe access granted. Protocol 7 engaged.', status: 'CRITICAL' },
    { id: 'LOG_03', date: '2099-11-15', title: 'NEURAL_LINK_STABILITY', content: 'Fluctuations detected in sector 7. Maintenance required.', status: 'WARNING' },
    { id: 'LOG_02', date: '2099-10-01', title: 'LEGACY_DATA_RECOVERY', content: 'Retrieving files from the old internet. 45TB recovered.', status: 'SUCCESS' },
    { id: 'LOG_01', date: '2099-09-23', title: 'INITIAL_BOOT_SEQUENCE', content: 'System online. All parameters nominal.', status: 'INFO' },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-neon-blue pb-4 mb-8">
        <h1 className="text-4xl md:text-6xl font-black font-orbitron mb-2">
          <GlitchText text="ENCRYPTED_DATA" />
        </h1>
        <p className="font-pixel text-xl text-gray-400">ACCESSING ARCHIVES...</p>
      </div>

      <div className="grid gap-6">
        {logs.map((log) => (
          <GlassPanel key={log.id} hoverEffect className="p-6 border-l-4 border-l-neon-pink flex flex-col md:flex-row gap-6 items-start md:items-center">
             <div className="font-pixel text-neon-blue w-32 shrink-0">
                <div className="text-2xl font-bold">{log.id}</div>
                <div className="text-sm text-gray-500">{log.date}</div>
             </div>
             <div className="flex-grow">
                <h3 className="text-xl font-bold font-orbitron mb-2 text-white">{log.title}</h3>
                <p className="text-gray-400 font-sans">{log.content}</p>
             </div>
             <div className="shrink-0">
                <span className={`
                  px-3 py-1 rounded text-xs font-bold font-pixel border
                  ${log.status === 'CRITICAL' ? 'border-red-500 text-red-500 bg-red-500/10' : ''}
                  ${log.status === 'WARNING' ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' : ''}
                  ${log.status === 'SUCCESS' ? 'border-green-500 text-green-500 bg-green-500/10' : ''}
                  ${log.status === 'INFO' ? 'border-blue-500 text-blue-500 bg-blue-500/10' : ''}
                `}>
                  {log.status}
                </span>
             </div>
          </GlassPanel>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="font-pixel text-xl text-gray-500 hover:text-neon-blue animate-pulse">LOAD MORE ENTRIES...</button>
      </div>
    </div>
  );
};

export default Data;
