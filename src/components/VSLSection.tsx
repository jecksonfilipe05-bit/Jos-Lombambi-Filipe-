import { motion } from 'motion/react';

export default function VSLSection() {
  return (
    <section className="py-20 bg-[#161616]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-400 mb-6">Assista ao vídeo abaixo antes que esta oportunidade saia do ar.</p>
        <div className="aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
            {/* VSL placeholder */}
            <div className="text-white text-4xl">▶</div>
        </div>
        <p className="text-gray-400 mt-6 text-sm">Este vídeo pode mudar completamente sua situação financeira.</p>
      </div>
    </section>
  );
}
