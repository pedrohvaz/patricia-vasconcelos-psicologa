import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { OFFICE_MEDIA, PROFESSIONAL } from '../../config/site';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

/** Apresentação do espaço de atendimento (vídeo vertical + fotos de apoio). */
export function OfficeSpace() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  // Pausa manual: impede que o vídeo volte a tocar sozinho ao reentrar na tela.
  const userPaused = useRef(false);

  // Reproduz (sem som) só quando visível — economiza dados e bateria.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduceMotion && !userPaused.current) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    }
  };

  const controlClass =
    'grid h-11 w-11 place-items-center rounded-full bg-navy/55 text-white backdrop-blur-md transition-colors hover:bg-navy/80';

  return (
    <section id="espaco" aria-labelledby="espaco-title" className="relative overflow-hidden pb-24 sm:pb-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="espaco-title"
            eyebrow="O espaço"
            title="Um ambiente pensado para acolher"
            description={
              <p>
                Tons suaves, plantas, luz acolhedora e conforto: cada detalhe do consultório foi pensado para que você se
                sinta à vontade para falar sobre a sua história, com tranquilidade e privacidade.
              </p>
            }
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {OFFICE_MEDIA.stills.map((still, i) => (
              <Reveal key={still.src} delay={120 + i * 120} className={i === 1 ? 'mt-10 sm:mt-16' : ''}>
                <img
                  src={still.src}
                  alt={still.alt}
                  width={576}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-[0_30px_60px_-40px_rgb(9_43_90/0.5)]"
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="lg:col-span-5">
          <figure className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm">
            <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-linear-to-b from-mint/40 to-sand/50" />

            <div className="relative overflow-hidden rounded-[2.25rem] bg-navy shadow-[0_40px_80px_-40px_rgb(9_43_90/0.6)]">
              <video
                ref={videoRef}
                className="aspect-[9/16] w-full object-cover"
                src={OFFICE_MEDIA.video}
                poster={OFFICE_MEDIA.poster}
                muted
                loop
                playsInline
                preload="none"
                aria-label={`Vídeo de apresentação do consultório de ${PROFESSIONAL.name}`}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onClick={togglePlay}
              />

              {!playing && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Reproduzir vídeo"
                  className="absolute inset-0 grid place-items-center bg-navy/10 transition-colors hover:bg-navy/20"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-petrol shadow-lg">
                    <Play className="ml-1 h-7 w-7" fill="currentColor" strokeWidth={0} />
                  </span>
                </button>
              )}

              <div className="absolute right-3 bottom-3 flex gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  className={controlClass}
                >
                  {playing ? <Pause className="h-5 w-5" strokeWidth={1.75} /> : <Play className="h-5 w-5" strokeWidth={1.75} />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
                  aria-pressed={!muted}
                  className={controlClass}
                >
                  {muted ? <VolumeX className="h-5 w-5" strokeWidth={1.75} /> : <Volume2 className="h-5 w-5" strokeWidth={1.75} />}
                </button>
              </div>
            </div>

            <figcaption className="mt-8 text-center text-xs font-medium uppercase tracking-[0.25em] text-petrol">
              Conheça o consultório
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
