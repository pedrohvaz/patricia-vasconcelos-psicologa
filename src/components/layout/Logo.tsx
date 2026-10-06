import { PROFESSIONAL } from '../../config/site';

type LogoProps = { tone?: 'dark' | 'light'; className?: string };

/**
 * Logotipo tipográfico.
 * Quando o arquivo oficial do logo estiver disponível, ele pode substituir este bloco.
 */
export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const light = tone === 'light';
  return (
    <span className={`flex flex-col leading-none whitespace-nowrap ${className}`}>
      <span className={`text-[1.05rem] font-medium tracking-[0.02em] sm:text-lg ${light ? 'text-cream' : 'text-navy'}`}>
        {PROFESSIONAL.name}
      </span>
      <span
        className={`mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.3em] ${light ? 'text-mint' : 'text-petrol'}`}
      >
        {PROFESSIONAL.title}
      </span>
    </span>
  );
}
