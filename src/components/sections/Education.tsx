import { BadgeCheck, BookOpen, GraduationCap, type LucideIcon } from 'lucide-react';
import { PROFESSIONAL } from '../../config/site';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

type Step = { n: string; title: string; detail: string; Icon: LucideIcon };

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Graduação em Psicologia',
    detail: 'Universidade Federal de São João del-Rei – UFSJ',
    Icon: GraduationCap,
  },
  {
    n: '02',
    title: 'Pós-Graduação',
    detail: 'Logoterapia e Análise Existencial – FABAD',
    Icon: BookOpen,
  },
  {
    n: '03',
    title: 'Registro profissional',
    detail: PROFESSIONAL.crp,
    Icon: BadgeCheck,
  },
];

export function Education() {
  return (
    <section aria-labelledby="formacao-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="rounded-[2rem] bg-linen px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="formacao-title" className="text-3xl font-light tracking-tight text-navy sm:text-4xl">
              Formação
            </h2>
            <p className="text-sm text-ink">Trajetória acadêmica e registro profissional</p>
          </Reveal>

          <div className="relative mt-12">
            {/* linha da timeline (desktop) */}
            <span aria-hidden="true" className="absolute top-6 right-[calc(33.333%-2.833rem)] left-6 hidden h-px bg-petrol/25 md:block" />

            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map(({ n, title, detail, Icon }, i) => (
              <Reveal as="li" key={n} delay={i * 120} className="relative flex gap-5 md:flex-col md:gap-6">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-petrol/30 bg-cream text-petrol">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-petrol">{n}</span>
                  <h3 className="mt-2 text-lg font-medium text-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{detail}</p>
                </div>
              </Reveal>
            ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
