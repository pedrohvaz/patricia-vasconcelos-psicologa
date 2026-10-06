import {
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Handshake,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { NR1, WHATSAPP_NR1_MESSAGE, buildWhatsAppLink } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { LeafMark } from '../ui/Ornaments';
import { Reveal } from '../ui/Reveal';

type Item = { title: string; text?: string; Icon: LucideIcon };

const CREDENTIALS: Item[] = [
  { title: 'Psicóloga e Gestora de NR-1', Icon: ShieldCheck },
  { title: 'Formação específica em NR-1 reconhecida pelo MEC', Icon: BadgeCheck },
  { title: 'Mais de 18 anos de atuação em Recursos Humanos em grandes empresas', Icon: Briefcase },
  { title: 'Pós-Graduação em Gestão Estratégica de Pessoas', Icon: GraduationCap },
  { title: 'Olhar clínico e sensível no que diz respeito à saúde mental', Icon: HeartPulse },
];

const SERVICES: Item[] = [
  {
    title: 'Parcerias',
    text: 'Trabalho conjunto com empresas e instituições que desejam cuidar da saúde mental de suas equipes.',
    Icon: Handshake,
  },
  {
    title: 'Consultorias',
    text: 'Orientação especializada para a adequação da empresa às exigências da NR-1.',
    Icon: Lightbulb,
  },
  {
    title: 'Ações em saúde mental',
    text: 'Iniciativas voltadas à saúde mental, à segurança e à qualidade de vida no trabalho.',
    Icon: Users,
  },
];

/** Saúde Mental Corporativa — NR-1. */
export function CorporateNR1() {
  const nr1Link = buildWhatsAppLink(WHATSAPP_NR1_MESSAGE);

  return (
    <section id="empresas" aria-labelledby="empresas-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-cream sm:px-12 lg:px-16 lg:py-20">
          <LeafMark className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 text-mint/10" />

          {/* Chamada NR-1 */}
          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="mb-6 inline-flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
                <span aria-hidden="true" className="h-px w-8 bg-mint/70" />
                Saúde Mental Corporativa · NR-1
              </p>
              <h2
                id="empresas-title"
                className="text-[1.85rem] leading-[1.2] font-light tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]"
              >
                A nova NR-1 está em vigor. Sua empresa está preparada?
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-cream/85">
                Desde <strong className="font-semibold text-cream">{NR1.effectiveDate}</strong>, a atualização da NR-1
                inclui os fatores de riscos psicossociais relacionados ao trabalho no gerenciamento de riscos ocupacionais
                das empresas. Cuidar da saúde mental no ambiente de trabalho deixou de ser apenas um diferencial.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5 lg:self-end">
              <blockquote className="rounded-3xl border border-mint/25 bg-mint/[0.07] p-7 sm:p-8">
                <p className="text-lg leading-relaxed font-light text-cream sm:text-xl">
                  NR-1 não é apenas uma exigência. É compromisso com{' '}
                  <span className="font-medium text-mint">saúde mental, segurança e qualidade de vida</span> no trabalho.
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div aria-hidden="true" className="relative my-14 h-px bg-cream/12 lg:my-16" />

          {/* Credenciais + serviços */}
          <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mint">
                  Atuação como Psicóloga e Gestora de NR-1
                </h3>
              </Reveal>
              <ul className="mt-7 space-y-5">
                {CREDENTIALS.map(({ title, Icon }, i) => (
                  <Reveal as="li" key={title} delay={i * 80} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="pt-2 text-[0.97rem] leading-snug text-cream/90">{title}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-mint">Como posso ajudar sua empresa</h3>
              </Reveal>
              <ul className="mt-7 grid gap-4">
                {SERVICES.map(({ title, text, Icon }, i) => (
                  <Reveal
                    as="li"
                    key={title}
                    delay={i * 100}
                    className="flex items-start gap-5 rounded-3xl border border-cream/12 bg-cream/[0.04] p-6 transition-colors duration-500 hover:border-mint/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand/15 text-sand">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-cream">{title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/75">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={200} className="mt-10 flex flex-col items-start gap-4">
                <ButtonLink href={nr1Link} external size="lg" variant="light" icon={<WhatsAppIcon />} className="w-full sm:w-auto">
                  Falar sobre NR-1 na minha empresa
                </ButtonLink>
                <p className="text-sm leading-relaxed text-cream/75">
                  Entre em contato para parcerias, consultorias e ações em saúde mental. Adeque sua empresa à norma e
                  evite multas.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
