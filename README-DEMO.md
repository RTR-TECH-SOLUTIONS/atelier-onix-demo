# Atelier Onix — demo de prezentare

Magazin online de obiecte decorative din onix. Demo pentru clientul de pe WhatsApp
(+40 722 319 593). Numele „Atelier Onix" este placeholder, se schimbă când îl comunică.

## Link live

Demo-ul se publică automat pe GitHub Pages la fiecare push pe `main`:
**https://rtr-tech-solutions.github.io/atelier-onix-demo**

Din cauza subdirectorului, toate căile trec prin `u()` din `src/lib/url.ts`.
Când mutăm pe domeniul clientului, scoți `base` din `astro.config.mjs` și `u()`
devine o funcție identitate, fără alte modificări.

## Cum îl pornești

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # ieșire în dist/
npm run preview
```

## Catalogul

30 de piese, împărțite pe 7 categorii. Accentul e pe **decorațiuni**, nu pe mobilier,
pentru că asta vinde clientul: vaze și obiecte de masă (9), sculpturi (5), birou și protocol (5),
sfeșnice și lumină (3), servirea mesei (4), jocuri și șah (2), mobilier (2).
Prețuri între 130 și 4.200 lei. 22 în stoc, 8 la comandă.

## Direcția de design

Referința aleasă de Mario: **creativdeco.ro**. Structura e ~90% aceeași,
estetica e adaptată la marfa clientului.

**Luat de la referință**
- header pe două rânduri: căutare stânga (linie, fără chenar), logo centrat, telefon + cont + coș dreapta
- nav uppercase pe rândul doi, cu intrări dincolo de categorii (Cadouri corporate, Despre piatră)
- bară promo de o singură propoziție
- hero split: titlu mare stânga, fotografie dreapta
- bandă cu trei dovezi imediat sub hero
- pagina de categorie: breadcrumb + H1 centrat + paragraf + rândul „Afișează X din Y" + Ordonează
- card fără chenar, packshot pe fundal neutru, nume descriptiv-tehnic cu dimensiuni în titlu,
  preț, stare de stoc. Fără buton de adăugare pe card.
- pagina de produs: galerie în mozaic (nu carusel), coloană de cumpărare, cod piesă,
  telefon de ajutor, patru reasigurări, taburi Descriere / Caracteristici / Livrare

**Adăugat peste referință** (cerute în iterația a doua)
- buton „Adaugă în coș" pe fiecare card, nu doar pe pagina produsului
- chips de filtre active + contoare pe opțiuni, ca la retailerii mari
- categoriile de pe homepage nu mai sunt o grilă de pătrate identice, ci un bento
  asimetric cu titlul suprapus pe fotografie și numărul de piese per categorie

**Schimbat față de referință**
- tipografie: Spectral (titluri) + Karla (text) în loc de Josefin Sans peste tot; body 16px, nu 13px
- paletă: neutru de piatră + un singur accent verde onix; alama doar pe preț și pe termene.
  Fără galben, fără roșu de discount pe fiecare card.
- radius 2px (`--radius-stone`). Piatra e tăiată drept — dacă vrei muchii mai blânde,
  schimbă o singură variabilă în `src/styles/global.css`.

## Ce funcționează în demo

| Funcționalitate | Stare |
|---|---|
| Coș cu localStorage: adăugare, cantitate, ștergere, total, prag transport gratuit | funcțional |
| Adăugare în coș direct de pe cardul de produs, cu confirmare pe buton | funcțional |
| Filtre catalog: 7 categorii, 6 camere, 5 ocazii, preț, disponibilitate + sortare | funcțional |
| Chips de filtre active, cu ștergere individuală și „șterge tot" | funcțional |
| Contor de piese pe fiecare opțiune de filtru, calculat din catalog | funcțional |
| Comutator de densitate a grilei (3 sau 4 pe rând) | funcțional |
| Drawer de filtre pe mobil, cu buton sticky „Vezi N piese" | funcțional |
| Titlul paginii de catalog se schimbă după categoria din `?cat=` | funcțional |
| Preselecție filtru din `?cat=` (linkurile din nav) | funcțional |
| Taburi pe pagina de produs | funcțional |
| Meniu mobil, drawer de filtre pe mobil | funcțional |
| Newsletter și formular de ofertă corporate | validare client-side, afișează confirmare |
| Cont: intrare / cont nou, cu validare, putere parolă, arată-parola | funcțional |
| Checkout pe 3 pași: date, livrare, plată, cu validare pe fiecare pas | funcțional |
| Sumar de comandă live: transport după prag, împachetare cadou, TVA, total | funcțional |
| Confirmare cu număr de comandă și golirea coșului | funcțional |
| Plata propriu-zisă | `TODO(real)` — nu se încasează nimic |
| Autentificarea propriu-zisă | `TODO(real)` — nu există server |

Toate locurile de legat sunt marcate cu `// TODO(real):`.

## Imagini

**30 de produse, 30 de imagini distincte.**

- `public/img/produse/` — 11 dintre ele sunt **pozele reale trimise de client pe WhatsApp**
  (măsuța cu bază de alamă, masa de șah, măsuța coloană, vaza sferică, setul de șah, elefantul,
  leul, piramida, mărul, bolul cu fructe, cupele). Restul de 19 sunt generate cu Higgsfield
  în același registru, ca să umple catalogul: sfeșnice, lampă, cutie de bijuterii, tavă,
  coastere, mojar, opritoare de carte, ceas, set de baie și altele.
- `public/img/` — hero-ul, fotografia din atelier și textura de onix, tot generate.
- `../client-photos/` — pozele clientului la rezoluția originală extrasă din WhatsApp,
  înainte de redimensionare.

Observație de dus mai departe: pozele clientului sunt renderuri cu fundaluri de fantezie
(deșert, savană, livadă). Arată bine în demo, dar pentru catalogul real are nevoie de
packshot pe fundal neutru.

## De făcut la proiectul real

1. **Stack**: Astro trece pe `output: "server"` (hybrid) și rulează pe VPS + Coolify.
   Paginile de marketing rămân statice, catalogul și produsul devin SSR, ca stocul și
   prețurile să se schimbe fără rebuild.
2. **Comerț**: Medusa self-hosted în Coolify (Node + Postgres) sau, dacă rămâne mic,
   Supabase + Stripe. Checkout prin Stripe Checkout, plus Netopia pentru plata locală.
   Ramburs la livrare.
3. **Admin**: clientul trebuie să adauge produse, poze și stocuri singur. Vine din motorul
   de comerț, nu construim panou separat.
4. **SEO** (după ce acceptă): research de cuvinte-cheie RO, title/meta/H1 pe fiecare pagină,
   JSON-LD `Product` + `LocalBusiness`, sitemap, robots, alt text real.
   Pagini pe intent: „masă de șah din onix", „cadouri din piatră naturală", „vaze din onix".
5. **Pachet legal**: banner cookie/GDPR, Termeni, Confidențialitate, Politica de cookies,
   badge ANPC + SOL (linkurile există deja în footer, paginile nu).
6. **Pagini care lipsesc**: /livrare, /retur, /intretinere, /contact, /cont, /termeni,
   /confidentialitate, /cookies. Linkurile sunt puse în footer, paginile se scriu la implementare.
7. **Performanță**: convertit PNG-urile în AVIF/WebP și trecut pe `<Image>` din `astro:assets`.
   Acum imaginile sunt PNG de 1-2 MB, bune de privit, prea grele pentru producție.
8. **Credit RTR** în footer.
