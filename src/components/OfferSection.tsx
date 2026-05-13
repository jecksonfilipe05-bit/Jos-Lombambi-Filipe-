import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function OfferSection() {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <section id="oferta" className="py-20 px-6">
            <div className="max-w-xl mx-auto bg-gradient-to-b from-[#1f1f1f] to-[#121212] p-10 rounded-3xl border border-green-500/20 text-center shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                <h2 className="text-3xl font-display text-white mb-6">Oferta Especial</h2>
                <div className="text-gray-400 line-through text-lg">De: 15.000 Kz</div>
                <div className="text-6xl font-black text-green-400 my-4">5.000 Kz</div>
                <div className="text-white mb-8">Acesso imediato + Suporte básico</div>
                
                <div className="text-red-500 font-mono text-3xl mb-8">{formatTime(timeLeft)}</div>
                
                <a href="https://pagamento.exemplo.com" className="block bg-green-500 hover:bg-green-600 text-black font-bold text-xl py-6 rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    🚀 SIM! EU QUERO COMEÇAR AGORA
                </a>
            </div>
            <div className="mt-8 text-center text-gray-500">
                <a href="https://wa.me/244900000000" className="flex items-center justify-center gap-2 hover:text-green-400">
                    💬 Dúvidas? Fale com nosso suporte no WhatsApp
                </a>
            </div>
        </section>
    );
}
