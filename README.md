# Fabián Cienfuegos — CV

Personal CV site. React + TypeScript on Vite, with three.js for the hero figure and anime.js for motion.

## Scripts

```bash
npm install
npm run dev       # local server with hot reload
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
npm run lint      # oxlint
npm run format    # prettier
```

## Updating the content

All of the text lives in **`src/data/cv.ts`**. Components only read from it, so updating a job, a
publication or a skill normally means editing that one file. The shape of the data is defined in
`src/types/cv.ts`.

Tags on `experience` and `projects` should use the same spelling as the skill names in `skills`.
That is how the "Where I've used …" panel in the Skills section finds matches.

The source CV this site was built from is `Fabian_Cienfuegos_International_CV.docx.md`.

## Project structure

```
src/
  app/            App shell and the list of sections used by the header navigation
  components/     Reusable pieces (Section layout, header, footer, tag list)
  sections/       One folder per CV section; each has its component and CSS module
    Hero/         Includes SliceScene.ts, the three.js scene (plain class, no React)
  data/           CV content
  types/          TypeScript types for the content
  hooks/          useReveal (scroll reveal), useActiveSection (header highlight)
  lib/motion.ts   Shared anime.js helpers
  styles/         Design tokens, global styles, print styles
```

### Adding a section

1. Create `src/sections/Name/Name.tsx` (+ `Name.module.css`) and wrap the content in `<Section id="name" title="…">`.
2. Add it to `src/app/App.tsx`.
3. Add `{ id: 'name', label: '…' }` to `src/app/navigation.ts` if it should appear in the header.

Any element with the `data-reveal` attribute inside a `Section` fades in when scrolled into view.

## Notes

- Colours and font sizes are CSS variables in `src/styles/tokens.css`. The three.js scene reads
  `--color-ink` and `--color-accent` from there too.
- Animations are skipped entirely when the visitor has "reduce motion" enabled in their OS.
- three.js is loaded lazily, so the text renders before the 3D figure.
- "Print / PDF" in the header uses `src/styles/print.css` to produce a clean single-column document.
