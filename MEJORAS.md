# DRAPS - Futures Millores

Llista de millores pendents per implementar en properes iteracions.

## 🔴 Prioritat Alta

### ~~Google Analytics~~ ✅
- ~~Configurar `NEXT_PUBLIC_GA_ID` amb un ID de Google Analytics 4~~
- ~~El script ja està carregat a `layout.tsx`, només falta l'ID~~
- Configurat amb ID `G-W960XWETX6` (01/03/2026)

### ~~Feedback visual del formulari~~ ✅
- ~~Afegir spinner o deshabilitar botó "Enviar" durant l'enviament~~
- ~~Evitar doble-click accidental~~
- Fet: Spinner afegit amb `Loader2` i botó deshabilitat durant enviament (01/03/2026)

## 🟡 Prioritat Mitjana

### ~~Menú mòbil (hamburguesa)~~ ✅
- ~~Afegir menú responsive amb `sheet.tsx` (ja existeix el component)~~
- ~~Millorar navegació en dispositius petits~~
- Fet: Afegit menú hamburguesa amb `Sheet` per a mòbils (01/03/2026)

### Animacions de scroll
- Fade-in/slide-up amb `framer-motion` al fer scroll
- Donar vida a les seccions quan apareixen

### Galeria de fotos
- Carrusel o grid amb fotos reals de les teles
- Mostra el producte i dóna més vida a la web

### Pàgina 404
- Crear `not-found.tsx` amb la marca DRAPS

## 🟢 Prioritat Baixa

### WhatsApp flotant
- Botó flotant a la cantonada per contacte ràpid

### Multiidioma (ca/es)
- Afegir castellà amb `next-intl` per turistes

### Blog / Novetats
- Secció de promocions i novetats (Carnaval, rebaixes...)
- Opció: CMS headless (Notion, Contentful)

### PWA
- `manifest.json` per instal·lar com a app al mòbil
