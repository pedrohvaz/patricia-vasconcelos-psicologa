import { ArrowDown } from 'lucide-react';
import { PROFESSIONAL, PROFILE_PHOTO, WHATSAPP_LINK } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { LeafMark, OrganicBlob, PathLine } from '../ui/Ornaments';
import { Reveal } from '../ui/Reveal';

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-32 lg:pb-24"
    >
      {/* fundo orgânico */}
      <OrganicBlob className="absolute -top-40 -right-48 -z-10 h-[38rem] w-[38rem] text-sand/45 lg:-right-24" />
      <OrganicBlob className="absolute -bottom-56 -left-56 -z-10 h-[30rem] w-[30rem] rotate-90 text-mint/20" />
      <PathLine className="absolute bottom-10 left-0 -z-10 h-32 w-full text-petrol/15" />

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pr-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-petrol">
              <span aria-hidden="true" className="h-px w-10 bg-petrol/60" />
              Psicologia Clínica
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1
              id="hero-title"
              className="mt-7 text-[2.2rem] leading-[1.15] font-light tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.6rem] lg:leading-[1.1]"
            >
              Um espaço para compreender, <span className="font-normal text-petrol">ressignificar</span> e encontrar{' '}
              <span className="relative inline-block whitespace-nowrap">
                sentido.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 h-3 w-full text-sage"
                  preserveAspectRatio="none"
                >
                  <path d="M2 8c40-6 90-7 196-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
              Atendimento psicológico online para adolescentes, adultos e idosos, com uma abordagem acolhedora baseada
              na Logoterapia e Análise Existencial.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href={WHATSAPP_LINK} external size="lg" icon={<WhatsAppIcon />}>
              Agendar atendimento
            </ButtonLink>
            <ButtonLink
              href="#sobre"
              size="lg"
              variant="secondary"
              icon={<ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.75} />}
              className="flex-row-reverse"
            >
              Conhecer meu trabalho
            </ButtonLink>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-navy/10 pt-7 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-petrol">Registro</dt>
                <dd className="mt-1.5 font-medium text-navy">{PROFESSIONAL.crp}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-petrol">Modalidade</dt>
                <dd className="mt-1.5 font-medium text-navy">{PROFESSIONAL.modality}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <PortraitFrame />
        </Reveal>
      </Container>
    </section>
  );
}

/** Moldura editorial em arco para a fotografia profissional. */
function PortraitFrame() {
  return (
    <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-none">
      {/* contorno deslocado */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2rem] border border-petrol/35 sm:translate-x-6 sm:translate-y-6"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-linear-to-b from-linen to-sand shadow-[0_40px_80px_-40px_rgb(9_43_90/0.45)]">
        {PROFILE_PHOTO ? (
          <img
            src={PROFILE_PHOTO}
            alt={`${PROFESSIONAL.name}, ${PROFESSIONAL.title}`}
            className="h-full w-full object-cover object-[50%_18%]"
            width={853}
            height={1280}
            fetchPriority="high"
          />
        ) : (
          // ESPAÇO RESERVADO PARA FOTO — definir PROFILE_PHOTO em src/config/site.ts
          <div role="img" aria-label={`Espaço reservado para a fotografia de ${PROFESSIONAL.name}`} className="relative h-full w-full">
            <OrganicBlob className="absolute -bottom-24 -left-16 h-80 w-80 text-mint/50" />
            <OrganicBlob className="absolute -top-10 -right-24 h-64 w-64 rotate-45 text-sage/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-7xl font-light tracking-[0.12em] text-navy/80 sm:text-8xl">PV</span>
              <span className="mt-4 h-px w-12 bg-petrol/50" />
              <span className="mt-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-navy/70">
                Psicóloga Clínica
              </span>
            </div>
          </div>
        )}
      </div>

      {/* selo flutuante */}
      <figcaption className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-[0_20px_40px_-20px_rgb(9_43_90/0.4)] backdrop-blur sm:-left-8">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-mint/35 text-petrol">
          <LeafMark className="h-6 w-6" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-navy">Atendimento online</span>
          <span className="block text-xs text-ink">Adolescentes, adultos e idosos</span>
        </span>
      </figcaption>
    </figure>
  );
}
