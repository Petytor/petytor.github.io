# petytor.github.io

Strona organizacji [petytor](https://github.com/petytor) — landing page opisujący
[jawna-sprawa](https://github.com/petytor/jawna-sprawa) i prowadzący do wygenerowania własnej
instancji. Identyfikacja wizualna opiera się na motywie publicznego dokumentu i osi czasu.
Publikuje się automatycznie pod https://petytor.github.io/ (konwencja GitHub Pages
dla repozytorium nazwanego `<organizacja>.github.io`, wdrożenie przez
`.github/workflows/deploy.yml`).

## Przed pierwszą publikacją

- [x] Repozytorium `petytor/jawna-sprawa` jest szablonem GitHub, więc link „Załóż swoją
      stronę” (`/generate`) prowadzi do generatora.
- [ ] Ustawienia repo → **Pages** → Source: **GitHub Actions** (workflow `deploy.yml` zrobi resztę).

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run lint      # astro check
npm run build
```
