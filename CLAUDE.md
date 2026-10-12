# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Avant toute modification (obligatoire)

Le checkout local peut être en retard sur GitHub (le site est aussi édité depuis d'autres sessions / branches `claude/*`). Avant de lire ou de modifier quoi que ce soit :

1. `git fetch origin && git status -sb` — si `main` est « behind », `git pull --ff-only origin main` d'abord (mettre de côté les changements locaux avec `git stash` si besoin).
2. Vérifier que `index.html` correspond bien au site en ligne (offres Formation/Conseil, bascule FR/EN). Une page « portfolio » avec une carte Manu = ancienne version : stop, resynchroniser.
3. En cas de doute entre ce que l'utilisateur décrit/montre et ce qu'on voit dans le dépôt, le dire et resynchroniser avant d'écrire, plutôt que de modifier une version obsolète.

## Project

Static homepage for [atelier-bleu.com](https://atelier-bleu.com) — presents Philippe's AI training ("Formation") and AI consulting ("Conseil") services, bilingual FR/EN. No build step, no framework, no dependencies. Deployable as-is to OVH web hosting or any static host.

The site previously showcased creative side-projects (a "Manu" beatmaker/portfolio card). That version is archived — see `archive/` — and no longer linked from the live homepage.

## Structure

- `index.html` — single-page layout: sticky contact/lang bar, hero, two offer cards (Formation / Conseil), about, footer
- `style.css` — all styles; uses CSS custom properties defined in `:root`
- `script.js` — FR/EN language toggle (swaps `data-fr` / `data-en` text on elements, persists choice in `localStorage`)
- `archive/` — previous portfolio version of the site (`index.html` + `style.css`), kept for reference/restore, not deployed/linked

## Design system

Le site suit le design system « Atelier Bleu » (artifact claude.ai : https://claude.ai/artifact/KWmCGr5Qw3Q3Ttq335Rch9 ; tokens dans `project/tokens.json`). Les jetons sont repris dans `:root`.

- Template sombre (barre du haut, héros, pied de page) : classe `.dark-band` / `.site-footer`, fond halo bleu nuit, wordmark `assets/atelier-bleu-blanc.png`.
- Contenu (offres, à propos) sur fond blanc `--surface` ; cartes `--card` bordées de `--border`, rayon 20 px.
- Accent : `--blue-glow` (formes, boutons), `--accent-text` pour du texte bleu. Bleu électrique `#4d8bff` (`--orange`, nom hérité du design system) pour eyebrows, badges et lignes de preuve : écart volontaire avec le design system, qui prévoit l'orange corail `#ff7a45`. Plus d'or.
- Police : **Inter** seule (titres en 900). Plus de Playfair Display.
- Images dans `assets/` (fond halo, wordmarks nuit/blanc), issues du design system.

## Editing bilingual content

Any element that should switch between French and English carries both `data-fr="…"` and `data-en="…"` attributes; `script.js` writes the active language into `textContent` on load and on toggle click. To edit copy, update both attributes on the element (not the tag's inner text, which is only the FR fallback shown before JS runs).

## Deployment

No build needed. Push to GitHub; deploy via OVH FTP/SSH or connect the repo to a static host. The git remote is already set to `https://github.com/LieonSP/atelier-bleu`.
