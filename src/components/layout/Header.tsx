import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { INSTAGRAM, NAV_ITEMS, PROFESSIONAL, WHATSAPP_LINK } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { Logo } from './Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu mobile: trava o scroll, fecha com Esc e mantém o foco dentro do painel.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>('a, button')].filter(
        Boolean,
      ) as HTMLElement[];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onResize = () => window.innerWidth >= 1024 && setOpen(false);

    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
        solid
          ? 'border-b border-navy/8 bg-cream/90 shadow-[0_8px_30px_-20px_rgb(9_43_90/0.35)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-18' : 'h-20 lg:h-24'}`}>
        <a href="#inicio" aria-label={`${PROFESSIONAL.name} – ${PROFESSIONAL.title}. Voltar ao início`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-2 text-sm text-navy/80 transition-colors hover:text-petrol after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-petrol after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${INSTAGRAM.handle} (abre em nova aba)`}
            className="grid h-10 w-10 place-items-center rounded-full text-navy/75 transition-colors hover:bg-navy/5 hover:text-petrol"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <ButtonLink href={WHATSAPP_LINK} external>
            Agendar atendimento
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-navy transition-colors hover:bg-navy/5 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </Container>

      {/* Painel mobile */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-navy/8 bg-cream lg:hidden"
      >
        <Container className="flex min-h-full flex-col py-8">
          <nav aria-label="Navegação mobile">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.href} className="border-b border-navy/8">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 text-xl font-light text-navy transition-colors hover:text-petrol"
                  >
                    <span className="text-xs font-medium text-petrol/80 tabular-nums">0{i + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <ButtonLink href={WHATSAPP_LINK} external size="lg" icon={<WhatsAppIcon />} onClick={() => setOpen(false)}>
              Agendar atendimento
            </ButtonLink>
            <ButtonLink
              href={INSTAGRAM.url}
              external
              size="lg"
              variant="secondary"
              icon={<InstagramIcon />}
              onClick={() => setOpen(false)}
            >
              {INSTAGRAM.handle}
            </ButtonLink>
            <p className="pt-4 text-center text-xs tracking-wide text-ink">
              {PROFESSIONAL.crp} · {PROFESSIONAL.modality}
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
