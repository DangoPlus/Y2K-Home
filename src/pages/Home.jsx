import React from 'react';
import GlitchText from '../components/ui/GlitchText';
import GlassPanel from '../components/ui/GlassPanel';
import CyberButton from '../components/ui/CyberButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center relative">
        <GlassPanel className="absolute top-0 right-0 p-4 rounded text-right font-pixel text-sm hidden lg:block">
          <p>COORDS: 34.0522° N, 118.2437° W</p>
          <p>STATUS: ONLINE</p>
          <p>MEMORY: 64MB / 128MB</p>
        </GlassPanel>

        <h2 className="font-pixel text-neon-blue mb-2 tracking-widest text-xl">WELCOME TO THE NEW MILLENNIUM</h2>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 relative z-20">
          <GlitchText text="DIGITAL" className="block chrome-title" />
          <GlitchText
            text="FANTASY"
            className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-pink pl-12"
          />
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-8 border-l-4 border-neon-pink pl-4 bg-black/40 p-4 backdrop-blur-sm font-orbitron">
          进入网络空间的虚空。连接未来与过去的接口。体验纯粹的 Y2K 美学，在这里，数据即是生命，铬金即是灵魂。
        </p>

        <div className="flex gap-4">
          <CyberButton onClick={() => navigate('/data')}>
            ENTER SYSTEM
          </CyberButton>
          <CyberButton variant="secondary" onClick={() => navigate('/connect')}>
            DOWNLOAD_LOG
          </CyberButton>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 opacity-50 w-5 h-5">
          <div className="absolute w-full h-[2px] bg-neon-pink top-[9px]"></div>
          <div className="absolute h-full w-[2px] bg-neon-pink left-[9px]"></div>
        </div>
        <div className="absolute bottom-20 right-20 opacity-50 w-5 h-5">
            <div className="absolute w-full h-[2px] bg-neon-pink top-[9px]"></div>
            <div className="absolute h-full w-[2px] bg-neon-pink left-[9px]"></div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="my-20 -mx-4 md:-mx-12 transform -rotate-1">
        <div className="overflow-hidden whitespace-nowrap bg-neon-blue text-black font-pixel text-2xl py-1 border-y-2 border-white">
          <div className="animate-marquee">
            /// SYSTEM UPDATE COMPLETE /// AESTHETIC REVOLUTION /// LIQUID METAL INTERFACE /// NOSTALGIA FOR THE FUTURE /// 2000 ///
            /// SYSTEM UPDATE COMPLETE /// AESTHETIC REVOLUTION /// LIQUID METAL INTERFACE /// NOSTALGIA FOR THE FUTURE /// 2000 ///
          </div>
        </div>
      </div>

      {/* Grid Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

        {/* Card 1 */}
        <GlassPanel hoverEffect className="p-6 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-xs font-pixel text-gray-500">REF_01</div>
          <div className="h-40 bg-gradient-to-br from-purple-900 to-black mb-4 border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="text-6xl group-hover:scale-125 transition-transform duration-500">💿</div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-cyan-300 font-orbitron">HYPER_MEDIA</h3>
          <p className="text-sm text-gray-400 font-pixel leading-relaxed">
            多媒体交互体验。从CD-ROM时代提取的记忆碎片，重构为高清数字流。
          </p>
          <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <button onClick={() => navigate('/visuals')} className="text-xs border border-white/30 px-2 py-1 hover:bg-white hover:text-black transition font-pixel">READ &gt;&gt;</button>
          </div>
        </GlassPanel>

        {/* Card 2 */}
        <GlassPanel hoverEffect className="p-6 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-xs font-pixel text-gray-500">REF_02</div>
          <div className="h-40 bg-gradient-to-br from-blue-900 to-black mb-4 border border-white/10 flex items-center justify-center">
            <div className="text-6xl group-hover:rotate-12 transition-transform duration-500">🌐</div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-pink-300 font-orbitron">WORLD_WIDE_WEB</h3>
          <p className="text-sm text-gray-400 font-pixel leading-relaxed">
            全球互联网络节点可视化。在信息高速公路上冲浪，无需等待拨号音。
          </p>
          <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
             <button onClick={() => navigate('/connect')} className="text-xs border border-white/30 px-2 py-1 hover:bg-white hover:text-black transition font-pixel">READ &gt;&gt;</button>
          </div>
        </GlassPanel>

        {/* Card 3 */}
        <GlassPanel hoverEffect className="p-6 rounded-lg relative overflow-hidden group md:col-span-2 lg:col-span-1">
          <div className="absolute top-0 right-0 p-2 text-xs font-pixel text-gray-500">REF_03</div>
          <div className="h-40 bg-gradient-to-br from-cyan-900 to-black mb-4 border border-white/10 flex items-center justify-center">
            <div className="text-6xl group-hover:skew-x-12 transition-transform duration-500">👽</div>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white font-orbitron">ALIEN_TECH</h3>
          <p className="text-sm text-gray-400 font-pixel leading-relaxed">
            来自未来的未知技术。逆向工程解码中...数据同步率 99.9%。
          </p>
          <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
             <button onClick={() => navigate('/system')} className="text-xs border border-white/30 px-2 py-1 hover:bg-white hover:text-black transition font-pixel">READ &gt;&gt;</button>
          </div>
        </GlassPanel>

      </section>

      {/* Bottom Data Display */}
      <GlassPanel className="p-8 rounded-xl border-t-4 border-t-neon-blue mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h4 className="font-pixel text-gray-500 mb-2">TRANSFER RATE</h4>
            <div className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              56.6 KB/S
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-between text-xs font-pixel mb-1 text-cyan-300">
              <span>UPLOAD</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden border border-gray-600">
              <div className="h-full bg-gradient-to-r from-neon-blue to-blue-600 w-full animate-pulse"></div>
            </div>
            <div className="mt-2 text-xs text-right text-gray-500 font-pixel">PACKET LOSS: 0.00%</div>
          </div>
        </div>
      </GlassPanel>
    </>
  );
};

export default Home;
