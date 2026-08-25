# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static homepage for [atelier-bleu.com](https://atelier-bleu.com) — presents Philippe's AI training ("Formation") and AI consulting ("Conseil") services, bilingual FR/EN. No build step, no framework, no dependencies. Deployable as-is to OVH web hosting or any static host.

The site previously showcased creative side-projects (a "Manu" beatmaker/portfolio card). That version is archived — see `archive/` — and no longer linked from the live homepage.

## Structure

- `index.html` — single-page layout: sticky contact/lang bar, hero, two offer cards (Formation / Conseil), about, footer
- `style.css` — all styles; uses CSS custom properties defined in `:root`
- `script.js` — FR/EN language toggle (swaps `data-fr` / `data-en` text on elements, persists choice in `localStorage`)
- `archive/` — previous portfolio version of the site (`index.html` + `style.css`), kept for reference/restore, not deployed/linked

## Design system

Colors are defined as CSS variables in `:root`:
- `--blue-deep / --blue-mid / --blue-light / --blue-glow` — Parisian night-sky palette (page background)
- `--text-primary / --text-muted` — typography (white on blue)
- `--gold` — accent, used for the eyebrow labels and offer credentials

Fonts loaded from Google Fonts: **Inter** (body, UI, headings) + **Playfair Display italic** (eyebrow labels only).

## Editing bilingual content

Any element that should switch between French and English carries both `data-fr="…"` and `data-en="…"` attributes; `script.js` writes the active language into `textContent` on load and on toggle click. To edit copy, update both attributes on the element (not the tag's inner text, which is only the FR fallback shown before JS runs).

## Deployment

No build needed. Push to GitHub; deploy via OVH FTP/SSH or connect the repo to a static host. The git remote is already set to `https://github.com/LieonSP/atelier-bleu`.
