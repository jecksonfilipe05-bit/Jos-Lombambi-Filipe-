import { motion } from 'motion/react';

export default function EmotionalSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 p-10 rounded-3xl">
        <h2 className="text-3xl font-display text-white mb-6">Talvez o problema nunca tenha sido você…</h2>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Você está cansado de promessas falsas? Jovens frustrados por não conseguir emprego, pessoas que tentaram ganhar dinheiro online mas foram burladas… O medo de investir novamente é real.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Mas e se eu te dissesse que existe um método simples, adaptado para a realidade angolana, que ninguém te mostrou antes? É hora de mudar o jogo.
        </p>
      </div>
    </section>
  );
}
