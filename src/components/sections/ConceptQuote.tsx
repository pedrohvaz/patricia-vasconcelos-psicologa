import { BRAND_QUOTE } from '../../config/site';
import { Container } from '../ui/Container';
import { PathLine } from '../ui/Ornaments';
import { Reveal } from '../ui/Reveal';

/** Seção conceitual com a frase da identidade da marca. */
export function ConceptQuote() {
  return (
    <section aria-label="Frase conceitual" className="relative overflow-hidden bg-white py-28 sm:py-36 lg:py-44">
      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="mb-10 flex items-center justify-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.4em] text-petrol">
            <span>Passado</span>
            <PathLine className="h-6 w-24 text-sage sm:w-40" />
            <span>Futuro</span>
          </div>

          <blockquote>
            <p className="text-[1.75rem] leading-[1.35] font-light tracking-tight text-balance text-navy sm:text-4xl lg:text-[3.1rem] lg:leading-[1.25]">
              <span aria-hidden="true" className="mr-1 font-light text-sage">
                “
              </span>
              {BRAND_QUOTE}
              <span aria-hidden="true" className="ml-1 font-light text-sage">
                ”
              </span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-12 max-w-xl text-center">
          <span aria-hidden="true" className="mx-auto mb-8 block h-12 w-px bg-linear-to-b from-petrol/50 to-transparent" />
          <p className="text-base leading-relaxed text-ink sm:text-lg">
            Na terapia, olhar para a própria história também pode ser um caminho para construir novos sentidos.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
