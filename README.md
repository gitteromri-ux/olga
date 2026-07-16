# Olga — Professional Enneagram Assessment

Olga is a complete, best-practice Enneagram inventory. Answer 108 statements and receive a full analysis of your dominant type (1–9), your wing, core motivations and fears, strengths, growth challenges, and stress/growth directions.

## Features

- **108-item questionnaire** — 12 items per type (gold standard), rated on a 5-point agree/disagree scale
- **Automatic scoring** — ranks all nine types and identifies your dominant type plus your wing (the higher-scoring adjacent type)
- **Full type analysis** — overview, center, core desire/fear, key motivation, strengths, growth challenges
- **Level dynamics** — at-best state, direction under stress (disintegration), and direction when growing (integration)
- **All 18 wings documented** — both wings shown for your type
- **Print / Save as PDF** on the results screen

## Tech

React + TypeScript + Vite. Scoring runs entirely client-side — no backend required.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
```

## Project structure

```
src/
  data/questions.ts   # 108-item inventory (12 per type)
  data/types.ts       # type profiles + 18 wing descriptions
  scoring.ts          # scoring + wing calculation
  App.tsx             # UI (intro / test / results)
  App.css             # styles
```

---

For self-understanding and reflection — not a clinical or diagnostic instrument.
