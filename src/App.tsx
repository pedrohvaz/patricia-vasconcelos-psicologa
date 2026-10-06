import { useRef } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { PrivacyDialog } from './components/layout/PrivacyDialog';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { About } from './components/sections/About';
import { Approach } from './components/sections/Approach';
import { Audience } from './components/sections/Audience';
import { CallToAction } from './components/sections/CallToAction';
import { ClinicalCorporate } from './components/sections/ClinicalCorporate';
import { ConceptQuote } from './components/sections/ConceptQuote';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';

export default function App() {
  const privacyRef = useRef<HTMLDialogElement>(null);
  const openPrivacy = () => privacyRef.current?.showModal();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-navy px-5 py-3 text-sm text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <ConceptQuote />
        <About />
        <Education />
        <Approach />
        <Audience />
        <ClinicalCorporate />
        <HowItWorks />
        <CallToAction />
        <Contact onOpenPrivacy={openPrivacy} />
      </main>

      <Footer onOpenPrivacy={openPrivacy} />
      <WhatsAppFloat />
      <PrivacyDialog ref={privacyRef} />
    </>
  );
}
