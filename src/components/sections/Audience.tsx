import { buildWhatsAppLink } from '../../config/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

type Group = { title: string; text: string; tone: string };

const GROUPS: Group[] = [
  {
    title: 'Adolescentes',
    text: 'Um espaço de escuta e acolhimento para questões emocionais, relacionamentos, escolhas e desafios dessa fase da vida.',
    tone: 'bg-mint/35',
  },
  {
    title: 'Adultos',
    text: 'Um espaço para refletir sobre experiências, relações, escolhas, mudanças e desafios pessoais e profissionais.',
    tone: 'bg-sand/60',
  },
  {
    title: 'Idosos',
    text: 'Um espaço de escuta, reflexão e construção de sentido diante das diferentes experiências e fases da vida.',
    tone: 'bg-sage/30',
  },
];

export function Audience() {
  return (
    <section id="atuacao" aria-labelledby="atuacao-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="atuacao-title"
          eyebrow="Atuação"
          title="Para quem é a psicoterapia?"
          align="center"
          description="Atendimento psicológico online para diferentes fases da vida."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {GROUPS.map(({ title, text, tone }, i) => (
            <Reveal as="li" key={title} delay={i * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white p-8 transition-all duration-500 ease-soft hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgb(9_43_90/0.4)] sm:p-10">
                <span
                  aria-hidden="true"
                  className={`absolute -top-14 -right-14 h-36 w-36 rounded-full ${tone} transition-transform duration-700 ease-soft group-hover:scale-125`}
                />
                <span className="relative text-xs font-semibold tracking-[0.2em] text-petrol">0{i + 1}</span>
                <h3 className="relative mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-navy">{title}</h3>
                <p className="relative mt-4 flex-1 leading-relaxed text-ink">{text}</p>
                <a
                  href={buildWhatsAppLink(
                    `Olá, Patrícia! Gostaria de saber mais sobre o atendimento psicológico para ${title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-petrol transition-colors hover:text-navy"
                >
                  Quero saber mais
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <span className="sr-only">sobre o atendimento para {title.toLowerCase()} (abre o WhatsApp)</span>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
