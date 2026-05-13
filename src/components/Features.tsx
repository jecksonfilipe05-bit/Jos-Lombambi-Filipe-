import { motion } from 'motion/react';
import { Target, Zap, Clock } from 'lucide-react';

const features = [
    { icon: Target, title: "Método Simples", desc: "Passo a passo descomplicado para qualquer um." },
    { icon: Zap, title: "Estratégia Prática", desc: "Focado em ações rápidas e resultados reais." },
    { icon: Clock, title: "Vendas Rápidas", desc: "Otimizado para sua primeira venda em 24h." }
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
            <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#1f1f1f] p-8 rounded-3xl border border-white/5"
            >
                <f.icon className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-xl text-white font-display font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
