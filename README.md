# petytor.github.io

Strona organizacji [petytor](https://github.com/petytor) — landing page opisujący
[jawna-sprawa](https://github.com/petytor/jawna-sprawa) i prowadzący do wygenerowania własnej
instancji. Publikuje się automatycznie pod https://petytor.github.io/ (konwencja GitHub Pages
dla repozytorium nazwanego `<organizacja>.github.io`, wdrożenie przez
`.github/workflows/deploy.yml`).

## Przed pierwszą publikacją

- [ ] Uzupełnij `src/site.config.ts` (imię/pseudonim, bio, link do kawy, link do innych
      projektów) — te same dane co w stopce `src/site.config.ts` w repo `jawna-sprawa`.
- [ ] W ustawieniach repo `petytor/jawna-sprawa` zaznacz **Template repository**, żeby link
      „Załóż swoją stronę” (`/generate`) na tej stronie faktycznie działał.
- [ ] Ustawienia repo → **Pages** → Source: **GitHub Actions** (workflow `deploy.yml` zrobi resztę).

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run lint      # astro check
npm run build
```
