# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing page for [atelier-bleu.com](https://atelier-bleu.com) — a personal portfolio showcasing creative projects. No build step, no framework, no dependencies. Deployable as-is to OVH web hosting or any static host.

## Structure

- `index.html` — single-page layout: SVG atelier background, project cards
- `style.css` — all styles; uses CSS custom properties defined in `:root`

## Design system

Colors are defined as CSS variables in `:root`:
- `--blue-deep / --blue-mid / --blue-light / --blue-glow` — Parisian night-sky palette
- `--warm-dark / --warm-wood` — interior atelier tones
- `--text-primary / --text-muted` — typography
- `--gold` — accent (reserved)

Fonts loaded from Google Fonts: **Playfair Display** (headings, italic tagline) + **Inter** (body, labels).

## Adding a project

Copy the commented-out placeholder card in `index.html` and fill in:
- `href` — project URL
- `card-icon` — a single Unicode character or emoji
- `card-title` — project name
- `card-desc` — one-line description

## Deployment

No build needed. Push to GitHub; deploy via OVH FTP/SSH or connect the repo to a static host. The git remote is already set to `https://github.com/LieonSP/atelier-bleu`.
