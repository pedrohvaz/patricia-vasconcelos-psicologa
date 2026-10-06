/**
 * Elementos gráficos orgânicos e discretos, inspirados na identidade:
 * formas suaves e uma linha contínua que liga "passado" e "futuro".
 */

type OrnamentProps = { className?: string };

export function OrganicBlob({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M421 92c58 34 104 96 112 165 9 70-21 147-72 199-52 52-125 79-195 74-70-6-136-44-170-101-34-56-36-131-11-195 25-63 77-115 139-145 62-29 139-31 197 3Z"
      />
    </svg>
  );
}

/** Linha fluida — o caminho entre passado e futuro. */
export function PathLine({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 800 200" fill="none" aria-hidden="true" className={className} preserveAspectRatio="none">
      <path
        d="M0 150C120 150 170 60 290 60s180 110 300 110 160-80 210-110"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Pequeno ramo/folha estilizado, traço fino. */
export function LeafMark({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M8 40C16 24 28 14 42 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M20 28c-1-7 3-13 10-15 1 7-3 13-10 15ZM14 35c-5-3-6-9-3-14 5 3 6 9 3 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
