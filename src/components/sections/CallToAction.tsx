import { CalendarHeart } from 'lucide-react';
import { WHATSAPP_LINK, buildWhatsAppLink } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { OrganicBlob, PathLine } from '../ui/Ornaments';
import { Reveal } from '../ui/Reveal';

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-petrol py-24 text-white sm:py-32">
      <OrganicBlob className="absolute -top-48 -left-40 -z-10 h-[34rem] w-[34rem] text-navy/35" />
      <OrganicBlob className="absolute -right-40 -bottom-56 -z-10 h-[30rem] w-[30rem] rotate-180 text-mint/15" />
      <PathLine className="absolute top-1/2 left-0 -z-10 h-40 w-full -translate-y-1/2 text-white/10" />

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-title"
            className="text-[1.9rem] leading-[1.25] font-light tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Dar espaço ao que você sente também é uma forma de cuidar de si.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Se você sente que é hora de olhar para sua história com mais atenção e buscar novos sentidos, entre em
            contato.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-11 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <ButtonLink
            href={WHATSAPP_LINK}
            external
            size="lg"
            variant="light"
            icon={<CalendarHeart className="h-5 w-5" strokeWidth={1.6} />}
          >
            Agendar atendimento
          </ButtonLink>
          <ButtonLink
            href={buildWhatsAppLink()}
            external
            size="lg"
            variant="outline-light"
            icon={<WhatsAppIcon />}
          >
            Falar pelo WhatsApp
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
