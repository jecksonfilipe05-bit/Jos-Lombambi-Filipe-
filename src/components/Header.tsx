import { useState } from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold font-display text-white">Primeira Venda <span className='text-green-400'>24H</span></div>
        <a 
          href="#oferta" 
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full transition-all hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
        >
          COMEÇAR AGORA
        </a>
      </nav>
    </motion.header>
  );
}
