/**
 * ============================================================
 *  DADOS OFICIAIS DO SITE
 *  Toda informação de contato e identificação fica centralizada
 *  aqui. Altere apenas este arquivo para atualizar o site inteiro.
 * ============================================================
 */

export const PROFESSIONAL = {
  name: 'Patrícia Vasconcelos',
  title: 'Psicóloga Clínica',
  crp: 'CRP 04/41464',
  city: 'Entre Rios de Minas – MG',
  modality: 'Atendimento online',
  audience: 'Adolescentes, adultos e idosos',
  approach: 'Logoterapia e Análise Existencial',
  area: 'Saúde Mental Clínica e Corporativa',
  hrExperience: 'Mais de 18 anos de atuação em Recursos Humanos em grandes empresas',
  nr1Role: 'Psicóloga e Gestora de NR-1',
} as const;

/** NR-1 — atualização com riscos psicossociais. */
export const NR1 = {
  effectiveDate: '26/05/2026',
} as const;

export const WHATSAPP_NR1_MESSAGE =
  'Olá, Patrícia! Gostaria de conversar sobre a adequação da minha empresa à NR-1.';

/** Número no formato internacional, somente dígitos (usado no link wa.me). */
export const WHATSAPP_NUMBER = '5531988400180';

/** Número formatado para exibição. */
export const WHATSAPP_DISPLAY = '+55 31 98840-0180';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá, Patrícia! Gostaria de saber mais sobre o atendimento psicológico.';

/** Gera o link do WhatsApp com mensagem pré-preenchida. */
export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK = buildWhatsAppLink();

export const INSTAGRAM = {
  handle: '@psi.patriciavasconcelos',
  url: 'https://www.instagram.com/psi.patriciavasconcelos/',
} as const;

/**
 * FOTO PROFISSIONAL
 * Quando a fotografia estiver disponível, salve-a em /public/images/
 * (ex.: /public/images/patricia-vasconcelos.jpg — proporção sugerida 4:5)
 * e informe o caminho abaixo. Enquanto for `null`, o site exibe uma
 * composição gráfica no lugar da foto.
 */
export const PROFILE_PHOTO: string | null = `${import.meta.env.BASE_URL}images/patricia-vasconcelos.webp`;

/** Foto da seção "Sobre mim". `null` mantém o layout sem imagem. */
export const ABOUT_PHOTO: string | null = `${import.meta.env.BASE_URL}images/patricia-vasconcelos-sobre.webp`;

/**
 * POLÍTICA DE PRIVACIDADE
 * Se existir uma página externa com a política oficial, informe a URL aqui.
 * Enquanto for `null`, o link abre um resumo dentro do próprio site
 * (componente PrivacyDialog), que deve ser revisado pela profissional.
 */
export const PRIVACY_POLICY_URL: string | null = null;

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Empresas', href: '#empresas' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Contato', href: '#contato' },
] as const;

export const BRAND_QUOTE = 'O futuro é o reflexo do que decidimos carregar do passado.';
