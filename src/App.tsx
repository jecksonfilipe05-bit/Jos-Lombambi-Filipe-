/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import VSLSection from './components/VSLSection';
import EmotionalSection from './components/EmotionalSection';
import Features from './components/Features';
import OfferSection from './components/OfferSection';
import Testimonials from './components/Testimonials';
import GuaranteeSection from './components/GuaranteeSection';

export default function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-gray-200">
      <Header />
      <Hero />
      <VSLSection />
      <EmotionalSection />
      <Features />
      <Testimonials />
      <GuaranteeSection />
      <OfferSection />
    </div>
  );
}
