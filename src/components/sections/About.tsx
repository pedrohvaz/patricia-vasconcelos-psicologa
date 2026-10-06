import { ABOUT_PHOTO, PROFESSIONAL, WHATSAPP_LINK } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { OrganicBlob } from '../ui/Ornaments';
import { Reveal } from '../ui/Reveal';

const CONCEPTS = ['Sentido', 'Autoconhecimento', 'Liberdade', 'Consciência', 'Resiliência', 'Escolhas', 'Propósito'];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden py-24 sm:py-32">
      <OrganicBlob className="absolute top-10 -left-60 -z-10 h-[32rem] w-[32rem] text-sand/35" />

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {ABOUT_PHOTO && (
          <Reveal className="lg:col-span-5">
            <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-x-4 top-10 -bottom-4 -z-10 rounded-[2.5rem] bg-mint/35 sm:-inset-x-6"
              />
              <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-45px_rgb(9_43_90/0.5)]">
                <img
                  src={ABOUT_PHOTO}
                  alt={`${PROFESSIONAL.name}, ${PROFESSIONAL.title}, sorrindo, de camisa branca`}
                  className="aspect-[4/5] w-full object-cover object-[50%_20%] transition-transform duration-[1.2s] ease-soft hover:scale-[1.03]"
                  width={853}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="absolute right-4 -bottom-5 rounded-full bg-navy px-5 py-2.5 text-xs font-medium tracking-wide text-cream shadow-lg sm:right-6">
                {PROFESSIONAL.crp}
              </figcaption>
            </figure>
          </Reveal>
        )}

        <div className={ABOUT_PHOTO ? 'lg:col-span-7' : 'lg:col-span-12'}>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-petrol">
              <span aria-hidden="true" className="h-px w-8 bg-petrol/60" />
              Quem sou
            </p>
            <h2 id="sobre-title" className="text-[2.2rem] leading-tight font-light tracking-tight text-navy sm:text-5xl">
              Sobre mim
            </h2>
          </Reveal>

          <Reveal delay={80} className="mt-8 space-y-6 text-base leading-[1.85] text-ink sm:text-[1.08rem]">
            <p className="text-xl leading-relaxed font-light text-navy sm:text-2xl">
              Sou <strong className="font-medium">Patrícia Vasconcelos</strong>, Psicóloga Clínica, com atuação voltada à
              saúde mental clínica e corporativa.
            </p>
            <p>
              Meu trabalho é direcionado a adolescentes, adultos e idosos, oferecendo um espaço de escuta, acolhimento e
              reflexão por meio do atendimento psicológico online.
            </p>
            <p>
              Minha formação inclui graduação em Psicologia pela Universidade Federal de São João del-Rei (UFSJ) e
              Pós-Graduação em Logoterapia e Análise Existencial pela FABAD.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul aria-label="Conceitos que orientam o trabalho" className="mt-9 flex flex-wrap gap-2.5">
              {CONCEPTS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-sage/50 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-navy"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-8">
            <ButtonLink href={WHATSAPP_LINK} external variant="ghost" className="px-0!">
              Falar com a Patrícia →
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
