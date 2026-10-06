import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const STEPS = [
  {
    title: 'Entre em contato',
    text: 'Envie uma mensagem pelo WhatsApp ou pelo formulário deste site.',
  },
  {
    title: 'Converse sobre sua necessidade',
    text: 'Um primeiro diálogo para compreender o que você busca e esclarecer dúvidas sobre o atendimento.',
  },
  {
    title: 'Agende seu atendimento',
    text: 'Definimos juntos o dia e o horário mais adequados para a sessão.',
  },
  {
    title: 'Comece seu processo terapêutico',
    text: 'As sessões acontecem online, de onde você estiver, com sigilo e cuidado ético.',
  },
];

export function HowItWorks() {
  return (
    <section id="atendimento" aria-labelledby="atendimento-title" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="atendimento-title"
          eyebrow="Atendimento online"
          title="Como funciona o atendimento online"
          description="Um processo simples, para que o primeiro passo seja leve."
        />

        <div className="relative mt-16 lg:mt-20">
          {/* linha horizontal (desktop) */}
          <span
            aria-hidden="true"
            className="absolute top-7 right-[calc(25%-2.875rem)] left-7 hidden h-px bg-linear-to-r from-petrol/40 via-sage/50 to-mint/60 lg:block"
          />
          {/* linha vertical (mobile) */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-7 w-px bg-linear-to-b from-petrol/40 via-sage/50 to-mint/60 lg:hidden"
          />

          <ol className="relative grid gap-0 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative flex gap-6 pb-10 last:pb-0 lg:flex-col lg:pb-0">
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-petrol/30 bg-cream text-sm font-semibold tracking-wider text-petrol">
                0{i + 1}
              </span>
              <div className="pt-2 lg:pt-0 lg:pr-4">
                <h3 className="text-lg leading-snug font-medium text-navy">{step.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink">{step.text}</p>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
