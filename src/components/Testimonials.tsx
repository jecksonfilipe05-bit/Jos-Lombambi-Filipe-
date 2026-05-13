import { motion } from 'motion/react';

const testimonials = [
    { name: "Kelson Silva", city: "Luanda", result: "Consegui minha primeira venda em 6 horas usando apenas WhatsApp.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Jandira Manuel", city: "Benguela", result: "Finalmente um método que funciona. Fiz 3 vendas no primeiro dia!", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Zola António", city: "Namibe", result: "Estava cético pelas burlas, mas este curso vale cada Kwanza.", image: "https://randomuser.me/api/portraits/men/82.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#161616]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display text-white text-center mb-16">Angolanos Reais. Resultados Reais.</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center">
                    <img src={t.image} alt={t.name} referrerPolicy="no-referrer" className="w-20 h-20 rounded-full mb-6 border-2 border-green-500/30" />
                    <p className="text-gray-300 mb-6 italic">"{t.result}"</p>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-green-400">{t.city}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
