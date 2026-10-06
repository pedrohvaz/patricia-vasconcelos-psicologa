import { useEffect, useRef } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { PrivacyDialog } from './components/layout/PrivacyDialog';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { About } from './components/sections/About';
import { Approach } from './components/sections/Approach';
import { Audience } from './components/sections/Audience';
import { CallToAction } from './components/sections/CallToAction';
import { CorporateNR1 } from './components/sections/CorporateNR1';
import { ConceptQuote } from './components/sections/ConceptQuote';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { OfficeSpace } from './components/sections/OfficeSpace';

export default function App() {
  const privacyRef = useRef<HTMLDialogElement>(null);
  const openPrivacy = () => privacyRef.current?.showModal();

  // Links diretos para uma seção (ex.: /#empresas): o conteúdo é montado pelo React
  // depois do carregamento, então a rolagem até a âncora é feita aqui.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

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
        <OfficeSpace />
        <Approach />
        <Audience />
        <CorporateNR1 />
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
