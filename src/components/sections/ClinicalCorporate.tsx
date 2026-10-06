import { Building2, HeartHandshake, type LucideIcon } from 'lucide-react';
import { buildWhatsAppLink } from '../../config/site';
import { Container } from '../ui/Container';
import { LeafMark } from '../ui/Ornaments';
import { Reveal } from '../ui/Reveal';

type Context = { label: string; title: string; text: string; Icon: LucideIcon; link?: { label: string; message: string } };

const CONTEXTS: Context[] = [
  {
    label: 'Contexto clínico',
    title: 'Psicoterapia individual online',
    text: 'Um espaço de escuta, acolhimento e reflexão para adolescentes, adultos e idosos, conduzido com ética, sigilo e respeito à história de cada pessoa.',
    Icon: HeartHandshake,
  },
  {
    label: 'Contexto corporativo',
    title: 'Saúde mental no ambiente de trabalho',
    text: 'A atuação também contempla possibilidades relacionadas à saúde mental no contexto organizacional. Empresas e instituições interessadas podem entrar em contato para conversar sobre suas necessidades.',
    Icon: Building2,
    link: {
      label: 'Entrar em contato',
      message: 'Olá, Patrícia! Gostaria de conversar sobre saúde mental no contexto corporativo.',
    },
  },
];

export function ClinicalCorporate() {
  return (
    <section aria-labelledby="saude-mental-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-cream sm:px-12 lg:px-16 lg:py-20">
          <LeafMark className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 text-mint/10" />

          <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
                <span aria-hidden="true" className="h-px w-8 bg-mint/70" />
                Áreas de atuação
              </p>
              <h2 id="saude-mental-title" className="text-[1.85rem] leading-tight font-light tracking-tight sm:text-4xl">
                Saúde Mental Clínica e Corporativa
              </h2>
              <p className="mt-6 leading-relaxed text-cream/85">
                O cuidado com a saúde mental acontece em diferentes espaços da vida. Por isso, a atuação contempla tanto o
                contexto clínico quanto possibilidades relacionadas ao ambiente corporativo.
              </p>
            </Reveal>

            <div className="grid gap-5 lg:col-span-7">
              {CONTEXTS.map(({ label, title, text, Icon, link }, i) => (
                <Reveal
                  key={label}
                  delay={i * 120}
                  className="rounded-3xl border border-cream/12 bg-cream/[0.04] p-6 transition-colors duration-500 hover:border-mint/40 sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">{label}</p>
                      <h3 className="mt-2 text-lg font-medium text-cream">{title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/80">{text}</p>
                      {link && (
                        <a
                          href={buildWhatsAppLink(link.message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-sand underline-offset-4 hover:underline"
                        >
                          {link.label} <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
