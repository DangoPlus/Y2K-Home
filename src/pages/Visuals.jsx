import React from 'react';
import GlassPanel from '../components/ui/GlassPanel';
import GlitchText from '../components/ui/GlitchText';

const Visuals = () => {
  // Using placeholders for now, but styled to look like "files"
  const galleryItems = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `IMG_SEQ_0${i + 1}`,
    size: `${Math.floor(Math.random() * 500 + 100)}MB`,
    type: Math.random() > 0.5 ? 'JPG' : 'GIF'
  }));

  return (
    <div className="space-y-8">
      <div className="border-b border-neon-pink pb-4 mb-8 text-right">
        <h1 className="text-4xl md:text-6xl font-black font-orbitron mb-2">
          <GlitchText text="VISUAL_FEED" />
        </h1>
        <p className="font-pixel text-xl text-gray-400">STREAMING FROM SECTOR 9</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <GlassPanel key={item.id} hoverEffect className="group relative aspect-square flex flex-col items-center justify-center p-4 border border-white/10">
            <div className="absolute top-2 left-2 text-xs font-pixel text-neon-blue">{item.type}</div>
            <div className="absolute top-2 right-2 text-xs font-pixel text-gray-500">{item.size}</div>

            <div className="w-full h-full bg-black/50 flex items-center justify-center border border-dashed border-gray-700 group-hover:border-neon-pink transition-colors">
                <div className="text-gray-600 font-pixel text-6xl group-hover:text-white transition-colors">
                    [ IMG ]
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-orbitron text-sm text-center">{item.title}</p>
                <button className="w-full mt-2 text-xs border border-neon-blue text-neon-blue py-1 hover:bg-neon-blue hover:text-black transition">
                    DOWNLOAD
                </button>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
};

export default Visuals;
