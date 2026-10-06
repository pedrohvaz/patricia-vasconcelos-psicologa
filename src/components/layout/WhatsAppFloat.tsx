import { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '../../config/site';
import { WhatsAppIcon } from '../ui/BrandIcons';

/** Botão flutuante de WhatsApp — aparece após o início da rolagem. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 transition-all duration-500 ease-soft sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo pelo WhatsApp (abre em nova aba)"
        tabIndex={visible ? 0 : -1}
        className="group peer animate-soft-pulse grid h-14 w-14 place-items-center rounded-full bg-petrol text-white shadow-[0_12px_30px_-10px_rgb(9_43_90/0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-petrol-dark"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <span
        role="tooltip"
        className="pointer-events-none absolute top-1/2 right-[calc(100%+0.75rem)] hidden -translate-y-1/2 translate-x-1 rounded-full bg-navy px-4 py-2 text-xs font-medium whitespace-nowrap text-cream opacity-0 shadow-lg transition-all duration-300 peer-hover:translate-x-0 peer-hover:opacity-100 peer-focus-visible:translate-x-0 peer-focus-visible:opacity-100 md:block"
      >
        Fale comigo pelo WhatsApp
      </span>
    </div>
  );
}
