import type { RefObject } from 'react';
import { X } from 'lucide-react';
import { PROFESSIONAL } from '../../config/site';

/**
 * Resumo de privacidade exibido enquanto não houver uma política oficial
 * (ver PRIVACY_POLICY_URL em src/config/site.ts).
 * ⚠️ Texto-base: revisar com a profissional antes da publicação.
 */
export function PrivacyDialog({ ref }: { ref: RefObject<HTMLDialogElement | null> }) {
  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="privacy-title"
      className="m-auto w-[min(92vw,40rem)] rounded-3xl bg-cream p-0 text-ink shadow-2xl backdrop:bg-navy/50 backdrop:backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="max-h-[80dvh] overflow-y-auto p-7 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <h2 id="privacy-title" className="text-2xl font-light text-navy">
            Política de Privacidade
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-navy hover:bg-navy/5"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed">
          <p>
            Este site tem caráter informativo e não armazena dados pessoais em servidores próprios.
          </p>
          <p>
            Ao utilizar o formulário de contato, as informações preenchidas (nome, WhatsApp, e-mail e mensagem) são
            organizadas em uma mensagem e enviadas diretamente pelo seu aplicativo do WhatsApp para{' '}
            {PROFESSIONAL.name}. Nenhum dado é enviado sem a sua confirmação no próprio WhatsApp.
          </p>
          <p>
            As informações recebidas são utilizadas exclusivamente para responder ao seu contato e são tratadas com
            sigilo, em conformidade com o Código de Ética Profissional do Psicólogo e com a Lei Geral de Proteção de
            Dados (Lei nº 13.709/2018).
          </p>
          <p>
            Este site utiliza fontes do Google Fonts, que podem registrar dados técnicos de acesso conforme a política
            de privacidade do próprio Google.
          </p>
          <p className="text-sm text-ink/90">
            {PROFESSIONAL.name} · {PROFESSIONAL.title} · {PROFESSIONAL.crp}
          </p>
        </div>
      </div>
    </dialog>
  );
}
