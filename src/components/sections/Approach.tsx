import { Compass, Eye, Footprints, type LucideIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

type Pillar = { title: string; text: string; Icon: LucideIcon };

const PILLARS: Pillar[] = [
  { title: 'Sentido', text: 'Encontrar significado nas experiências e na própria trajetória.', Icon: Compass },
  { title: 'Autoconhecimento', text: 'Compreender pensamentos, sentimentos, escolhas e possibilidades.', Icon: Eye },
  { title: 'Protagonismo', text: 'Reconhecer a própria liberdade e responsabilidade diante da vida.', Icon: Footprints },
];

export function Approach() {
  return (
    <section id="abordagem" aria-labelledby="abordagem-title" className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading id="abordagem-title" eyebrow="Abordagem" title="Logoterapia e Análise Existencial" />
          </div>
          <Reveal delay={120} className="lg:col-span-6 lg:pt-12">
            <p className="text-base leading-[1.85] text-ink sm:text-[1.08rem]">
              A Logoterapia e a Análise Existencial propõem um olhar para a pessoa, sua liberdade, responsabilidade e
              busca por sentido. A terapia pode ser um espaço para compreender a própria história, ampliar a consciência
              sobre as escolhas e construir novos caminhos.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid border-t border-navy/10 md:grid-cols-3 lg:mt-20">
          {PILLARS.map(({ title, text, Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 120}
              className={`group py-10 md:px-8 md:py-12 ${i > 0 ? 'border-t border-navy/10 md:border-t-0 md:border-l' : ''} ${
                i === 0 ? 'md:pl-0' : ''
              }`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-mint/30 text-petrol transition-colors duration-500 group-hover:bg-petrol group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-navy">{title}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-ink">{text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
