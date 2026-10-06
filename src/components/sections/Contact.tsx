import { Laptop, MapPin, ShieldCheck, type LucideIcon } from 'lucide-react';
import { INSTAGRAM, PROFESSIONAL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from './ContactForm';

const INFO: { Icon: LucideIcon; label: string; value: string }[] = [
  { Icon: ShieldCheck, label: 'Registro profissional', value: PROFESSIONAL.crp },
  { Icon: MapPin, label: 'Localização', value: PROFESSIONAL.city },
  { Icon: Laptop, label: 'Modalidade', value: PROFESSIONAL.modality },
];

export function Contact({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  return (
    <section id="contato" aria-labelledby="contato-title" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="contato-title" eyebrow="Contato" title="Vamos conversar?" />

          <Reveal delay={100} className="mt-10">
            <p className="text-lg font-medium text-navy">{PROFESSIONAL.name}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-petrol">{PROFESSIONAL.title}</p>

            <ul className="mt-8 space-y-5">
              {INFO.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint/30 text-petrol">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-ink">{label}</span>
                    <span className="block font-medium text-navy">{value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={WHATSAPP_LINK} external size="lg" icon={<WhatsAppIcon />}>
                Falar com a Patrícia
              </ButtonLink>
            </div>
            <p className="mt-3 text-sm text-ink">WhatsApp: {WHATSAPP_DISPLAY}</p>
          </Reveal>

          {/* Convite para o Instagram — sem feed simulado */}
          <Reveal delay={180} className="mt-12">
            <div className="rounded-[1.75rem] bg-linen p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-sand">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-petrol">Instagram</p>
                  <p className="font-medium text-navy">{INSTAGRAM.handle}</p>
                </div>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink">
                Conteúdos sobre saúde mental, autoconhecimento e reflexão.
              </p>
              <ButtonLink href={INSTAGRAM.url} external variant="secondary" className="mt-6">
                Conheça meu Instagram
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm onOpenPrivacy={onOpenPrivacy} />
        </Reveal>
      </Container>
    </section>
  );
}
