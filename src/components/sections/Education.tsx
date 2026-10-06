import { BadgeCheck, BookOpen, Briefcase, GraduationCap, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import { PROFESSIONAL } from '../../config/site';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

type Step = { title: string; detail: string; Icon: LucideIcon };

const STEPS: Step[] = [
  {
    title: 'Graduação em Psicologia',
    detail: 'Universidade Federal de São João del-Rei – UFSJ',
    Icon: GraduationCap,
  },
  {
    title: 'Pós-Graduação',
    detail: 'Logoterapia e Análise Existencial – FABAD',
    Icon: BookOpen,
  },
  {
    title: 'Pós-Graduação',
    detail: 'Gestão Estratégica de Pessoas',
    Icon: Users,
  },
  {
    title: 'Formação em NR-1',
    detail: 'Formação específica reconhecida pelo MEC',
    Icon: ShieldCheck,
  },
  {
    title: 'Recursos Humanos',
    detail: 'Mais de 18 anos de atuação em grandes empresas',
    Icon: Briefcase,
  },
  {
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
              Formação e experiência
            </h2>
            <p className="text-sm text-ink">Trajetória acadêmica, profissional e registro</p>
          </Reveal>

          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
            {STEPS.map(({ title, detail, Icon }, i) => (
              <Reveal
                as="li"
                key={`${title}-${detail}`}
                delay={(i % 3) * 120}
                className="flex gap-5 border-t border-petrol/20 pt-7"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-petrol/30 bg-cream text-petrol">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-petrol">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1.5 text-lg leading-snug font-medium text-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
