import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { buildWhatsAppLink } from '../../config/site';
import { Button } from '../ui/Button';

type Fields = { nome: string; whatsapp: string; email: string; mensagem: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { nome: '', whatsapp: '', email: '', mensagem: '' };

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (f.nome.trim().length < 2) errors.nome = 'Por favor, informe seu nome.';
  const digits = f.whatsapp.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 13) errors.whatsapp = 'Informe um WhatsApp válido, com DDD.';
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    errors.email = 'Informe um e-mail válido ou deixe o campo em branco.';
  if (f.mensagem.trim().length < 3) errors.mensagem = 'Escreva uma breve mensagem.';
  return errors;
}

/** Máscara simples: (31) 98888-8888 */
function formatPhone(value: string) {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function buildFormMessage(f: Fields) {
  return [
    `Olá, Patrícia! Meu nome é ${f.nome.trim()}.`,
    'Gostaria de saber mais sobre o atendimento psicológico.',
    '',
    `Meu WhatsApp: ${f.whatsapp.trim()}`,
    `Meu e-mail: ${f.email.trim() || 'não informado'}`,
    '',
    'Mensagem:',
    f.mensagem.trim(),
  ].join('\n');
}

export function ContactForm({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = key === 'whatsapp' ? formatPhone(e.target.value) : e.target.value;
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      document.getElementById(`contato-${firstInvalid}`)?.focus();
      return;
    }

    const url = buildWhatsAppLink(buildFormMessage(fields));
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;

    setSent(true);
    setFields(EMPTY);
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-labelledby="form-title"
      className="rounded-[2rem] border border-navy/8 bg-white p-7 shadow-[0_40px_80px_-50px_rgb(9_43_90/0.35)] sm:p-10"
    >
      <h3 id="form-title" className="text-xl font-medium text-navy">
        Envie uma mensagem
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink">
        Ao enviar, sua mensagem será aberta no WhatsApp, pronta para você confirmar.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="nome" label="Nome" required error={errors.nome} className="sm:col-span-2">
          <input
            id="contato-nome"
            name="nome"
            type="text"
            autoComplete="name"
            value={fields.nome}
            onChange={update('nome')}
            {...ariaFor('nome', errors.nome)}
            className={inputClass(errors.nome)}
          />
        </Field>

        <Field id="whatsapp" label="WhatsApp" required error={errors.whatsapp}>
          <input
            id="contato-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(00) 00000-0000"
            value={fields.whatsapp}
            onChange={update('whatsapp')}
            {...ariaFor('whatsapp', errors.whatsapp)}
            className={inputClass(errors.whatsapp)}
          />
        </Field>

        <Field id="email" label="E-mail" hint="opcional" error={errors.email}>
          <input
            id="contato-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={fields.email}
            onChange={update('email')}
            {...ariaFor('email', errors.email)}
            className={inputClass(errors.email)}
          />
        </Field>

        <Field id="mensagem" label="Mensagem" required error={errors.mensagem} className="sm:col-span-2">
          <textarea
            id="contato-mensagem"
            name="mensagem"
            rows={5}
            value={fields.mensagem}
            onChange={update('mensagem')}
            {...ariaFor('mensagem', errors.mensagem)}
            className={`${inputClass(errors.mensagem)} resize-y`}
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" icon={<Send className="h-4 w-4" strokeWidth={1.75} />}>
        Enviar mensagem
      </Button>

      <div aria-live="polite" className="min-h-0">
        {sent && (
          <p className="mt-6 flex items-start gap-3 rounded-2xl bg-mint/25 p-4 text-sm leading-relaxed text-navy">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-petrol" strokeWidth={1.75} aria-hidden="true" />
            Abrimos o WhatsApp com a sua mensagem. Para concluir, basta confirmar o envio por lá.
          </p>
        )}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink">
        Seus dados não são armazenados neste site.{' '}
        <button type="button" onClick={onOpenPrivacy} className="inline-flex min-h-6 cursor-pointer items-center text-petrol underline underline-offset-2 hover:text-navy">
          Política de Privacidade
        </button>
      </p>
    </form>
  );
}

/* ---------- helpers ---------- */

function inputClass(error?: string) {
  return (
    'block w-full rounded-2xl border bg-cream/60 px-4 py-3.5 text-base text-navy placeholder:text-ink/50 ' +
    'transition-colors duration-300 focus:bg-white focus:outline-none focus:ring-2 ' +
    (error
      ? 'border-red-700/60 focus:border-red-700 focus:ring-red-700/20'
      : 'border-navy/12 hover:border-navy/25 focus:border-petrol focus:ring-petrol/20')
  );
}

function ariaFor(id: keyof Fields, error?: string) {
  return {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `contato-${id}-erro` : undefined,
    'aria-required': id === 'email' ? undefined : true,
  } as const;
}

type FieldProps = {
  id: keyof Fields;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, required, hint, error, className = '', children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={`contato-${id}`} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-petrol">
            *
          </span>
        )}
        {hint && <span className="ml-2 text-xs font-normal text-ink">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`contato-${id}-erro`} className="mt-2 text-sm text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}
