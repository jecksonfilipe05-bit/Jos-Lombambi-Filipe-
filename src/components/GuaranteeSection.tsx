import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function GuaranteeSection() {
  return (
    <section className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-[#1f1f1f] to-[#121212] p-10 rounded-3xl border border-white/10 shadow-2xl"
      >
        <div className="text-green-500 shrink-0">
          <ShieldCheck size={80} strokeWidth={1} />
        </div>
        <div>
          <h2 className="text-3xl font-display text-white mb-2">Garantia Incondicional de 7 Dias</h2>
          <p className="text-gray-300 text-lg">
            Teste o método por 7 dias. Se não gostar, devolvemos o teu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
