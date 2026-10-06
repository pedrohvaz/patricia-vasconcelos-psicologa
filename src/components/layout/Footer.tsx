import { INSTAGRAM, NAV_ITEMS, PRIVACY_POLICY_URL, PROFESSIONAL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../../config/site';
import { InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { LeafMark } from '../ui/Ornaments';
import { Logo } from './Logo';

type FooterProps = { onOpenPrivacy: () => void };

const linkClass = 'inline-flex items-center gap-3 py-1 text-cream/85 transition-colors hover:text-mint';

export function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-navy pt-20 pb-28 text-cream sm:pb-12">
      <LeafMark className="pointer-events-none absolute -top-6 -right-6 h-56 w-56 text-mint/10" />

      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/80">
              Atendimento psicológico online
              <br />
              {PROFESSIONAL.city}
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-sand">{PROFESSIONAL.crp}</p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-mint">Navegação</h2>
            <ul className="mt-5 space-y-1.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-mint">Contato</h2>
            <ul className="mt-5 space-y-1.5 text-sm">
              <li>
                <a href={INSTAGRAM.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <InstagramIcon className="h-4 w-4" />
                  Instagram <span className="text-cream/65">{INSTAGRAM.handle}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp <span className="text-cream/65">{WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                {PRIVACY_POLICY_URL ? (
                  <a href={PRIVACY_POLICY_URL} className={linkClass}>
                    Política de Privacidade
                  </a>
                ) : (
                  <button type="button" onClick={onOpenPrivacy} className={`${linkClass} cursor-pointer`}>
                    Política de Privacidade
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-8 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {PROFESSIONAL.name} · {PROFESSIONAL.title} · {PROFESSIONAL.crp}
          </p>
          <p>Este site não substitui atendimento em situações de urgência.</p>
        </div>
      </Container>
    </footer>
  );
}
