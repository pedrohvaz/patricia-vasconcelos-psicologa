# Patrícia Vasconcelos | Psicóloga Clínica

Landing page em React + TypeScript + Tailwind CSS v4 (Vite).

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # gera /dist para publicação
```

## Onde editar

- **Contatos, CRP, textos-base, foto e política de privacidade:** `src/config/site.ts`
- **Cores e fonte da marca:** `src/index.css` (bloco `@theme`)
- **Seções:** `src/components/sections/`

## Pendências antes de publicar

1. **Foto profissional:** salvar em `public/images/` e definir `PROFILE_PHOTO` em `src/config/site.ts`.
   Enquanto isso, o site mostra uma composição com o monograma "PV".
2. **Imagem de compartilhamento:** adicionar `public/og-image.jpg` (1200×630).
3. **Domínio:** preencher `canonical` e `og:url` no `index.html` (comentados).
4. **Política de Privacidade:** revisar o texto-base em `src/components/layout/PrivacyDialog.tsx`
   ou definir `PRIVACY_POLICY_URL` para uma página oficial.
5. **Logo oficial:** se houver arquivo do logotipo, ele pode substituir `src/components/layout/Logo.tsx`.
