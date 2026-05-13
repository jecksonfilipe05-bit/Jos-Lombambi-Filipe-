import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-tight"
        >
          Descubra Como Pessoas Comuns Estão Fazendo a <span className="text-green-400">Primeira Venda Online em Menos de 24 Horas</span> — Mesmo Sem Experiência e Apenas Com Um Telemóvel
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10"
        >
          Um método simples, adaptado para Angola, criado para quem quer finalmente ganhar dinheiro online sem cair em burlas.
        </motion.p>
        <motion.a 
          href="#oferta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)] mb-8"
        >
          QUERO FAZER MINHA PRIMEIRA VENDA
        </motion.a>
        <div className="flex flex-col md:flex-row justify-center gap-4 text-gray-300">
            <span className="flex items-center gap-2">🚀 Funciona para iniciantes</span>
            <span className="flex items-center gap-2">🚫 Sem precisar aparecer</span>
            <span className="flex items-center gap-2">📱 Apenas com internet e WhatsApp</span>
        </div>
      </div>
      <div className="mt-10 text-center">
            <a href="https://wa.me/244900000000" className="text-green-400 hover:text-green-300 flex items-center justify-center gap-2">
                💬 Precisa de ajuda? Fale conosco no WhatsApp
            </a>
      </div>
    </section>
  );
}
