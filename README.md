# DRAPS - Teles i Roba a metres

Web de la botiga **DRAPS**, especialitzada en teles i teixits a La Bisbal d'Empordà (Girona). Més de 40 anys d'experiència.

🌐 **[draps.cat](https://draps.cat)**

## Tecnologies

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TailwindCSS 3](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Funcionalitats

- **Pàgina principal** amb seccions: inici, qui som, categories de teixits, contacte
- **Formulari de contacte** via [Web3Forms](https://web3forms.com/) — envia les consultes directament per email
- **Mapa** integrat de Google Maps amb la ubicació de la botiga
- **SEO** optimitzat amb Open Graph i metadades

## Desenvolupament local

```bash
npm install
npm run dev
```

Obre [http://localhost:3000](http://localhost:3000) al navegador.

## Desplegament

El projecte es desplega automàticament a **Vercel** amb cada `git push` a la branca `main`.

## Formulari de contacte

El formulari utilitza **Web3Forms** per gestionar els missatges. La clau d'accés es configura directament al codi del client (`page.tsx`). Per canviar l'email de recepció, modifica la configuració a [web3forms.com](https://web3forms.com/).
