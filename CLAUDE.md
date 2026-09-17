# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # next dev at http://localhost:3000
npm run build      # next build → static site in ./out (output: "export")
npm run lint       # eslint (flat config, eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit   # typecheck (no separate script)

VERCEL_GIT_COMMIT_REF=uat npm run build   # build in UAT mode locally (noindex, uat.telkie.com URLs)
npx serve out     # preview a build — `npm run start` does not work with output: "export"
```

There is no test suite. Verify changes with `npm run build` (catches static-export violations) and `npm run lint`.

## What this is

A single-page marketing site for Telkie (WeChat guest messaging for hotels), built on Next.js 16 App Router + React 19 + Tailwind v4, statically exported and deployed to Vercel.

- **Static export is a hard constraint.** `next.config.ts` sets `output: "export"`. No server actions, route handlers with dynamic behavior, middleware, or `next/image`. Images use plain `<img>` with an `// eslint-disable-next-line @next/next/no-img-element` comment. `robots.ts` and `sitemap.ts` declare `export const dynamic = "force-static"`.
- **Deploy & environments:** a single Git-connected Vercel project (company team account) builds every pushed branch with `next build` → `out/`. There is no deploy workflow in the repo.
  - `main` → **production** at `https://telkie.com` (indexed).
  - `uat` → **UAT** at `https://uat.telkie.com` (`noindex`, robots `Disallow: /`) — a Vercel domain assigned to the `uat` Git branch.
  - Any other branch/PR → throwaway preview at `*.vercel.app` (also `noindex`).
  - Branch flow: `uat` is the shared integration branch, `main` is production. Feature branch (the Slack agent uses `iris/*`; engineers use anything) → PR into `uat` → review on uat.telkie.com → one batched "Release to production" PR `uat` → `main`, approved and merged by a human. Hotfixes: PR into `main`, then PR `main` → `uat`.
  - `.github/workflows/ci.yml` runs lint + a UAT-mode build (`verify`) on every PR into `uat` or `main`. Any non-draft, same-repo PR into `uat` is **auto-merged** once `verify` passes — a draft PR opts out. After each merge it creates or refreshes the release PR (`uat` → `main`) with the list of changes waiting on UAT. Nothing auto-merges into `main`. There is no deploy workflow; Vercel deploys on push.
  - To drop a change that is already on `uat`, revert it there (a revert PR into `uat`, auto-merges) before shipping — the release is all-or-nothing.
  - Rulesets protect both branches: PRs required, no force-push or deletion. `main` also needs 1 approval (repo admins may bypass, on PRs only). The Slack agent's GitHub App has `contents: write`, so these rulesets — not the agent's own `iris/*` convention — are what keep it off `main`.
  - `src/lib/site.ts` derives `IS_PRODUCTION` and `SITE_URL` from Vercel's build-time `VERCEL_GIT_COMMIT_REF` / `VERCEL_BRANCH_URL`; `layout.tsx` (metadataBase, OG, JSON-LD, robots meta) and `robots.ts` / `sitemap.ts` all read from it. Locally both vars are unset, so a plain `npm run build` produces the production output.
  - The checkout is linked to the Vercel project via a gitignored `.vercel/` directory, so `vercel` CLI commands work here without re-linking. Never commit it.
- **No client components.** Everything under `src/` is a server component (no `"use client"` anywhere). `Reveal` is a pure-CSS fade-up keyed off `--reveal-delay`, not an IntersectionObserver — keep it that way unless interactivity is genuinely needed.

## Structure

- `src/app/page.tsx` — the whole site: `Nav`, then `<main>` containing the sections in page order (`Hero → WhatIs → ScanToService → Features → Showcase → Security → Stat → Pricing → CTA`), then `Footer`. Reordering or adding a section means editing this one file; new sections go inside `<main>`.
- `src/app/layout.tsx` — Geist fonts, `<Metadata>` (OG/Twitter/canonical), and Organization JSON-LD. Page title/description live here.
- `src/app/globals.css` — the entire design token system. Colors are CSS variables on `:root`, mapped into Tailwind via `@theme inline` so they're usable as `bg-bg`, `text-fg-muted`, `border-border`, etc. There is no `tailwind.config`; Tailwind v4 is wired through `postcss.config.mjs`.
- `src/components/` — flat; layout primitives (`container`, `split-section`, `card`, `section-heading`, `image-band`, `button`, `reveal`, `icons`) plus one file per page section.
- `public/images/` — web-served assets (`lifestyle/`, `logo/`, `feature-ui/`). The root-level `images/` directory is tracked in git but not served; it holds raw/original source files (deck exports, unoptimized PNGs, some paths with spaces) — resize/compress into `public/images/` before using anything from it.
- `reference_do_not_commit_to_github/` — untracked local reference material; never `git add` it.

## Design system

`DESIGN_SYSTEM.md` is the authoritative reference for tokens, spacing rhythm, component props, and imagery rules. Read it before adding or editing a section. The non-negotiables it encodes:

- Only use the color tokens defined in `globals.css` — no raw hex, no stock Tailwind palette (`gray-900`, `blue-500`, …).
- Border color is always `border-border` at rest. Border-only hover states darken to `border-border-strong` (e.g. `Card hover`); the ghost `Button` is the one exception and hovers to `accent` border/text with `bg-accent/20`. Never use a `fg-*` token for a border. (Several recent commits were regressions on exactly this — see `git log`.)
- Compose new sections from `SplitSection` / `ImageBand` / `Card` / `SectionHeading` / `Reveal` rather than writing new one-off grid markup.
- Section rhythm: `py-24 sm:py-32` with `border-t border-border`; panels `rounded-2xl`, buttons/pills `rounded-full`.

## Notes

- `AGENTS.md` is regenerated by `next dev` (see its header); keep the `@AGENTS.md` import above rather than inlining its content. Consult `node_modules/next/dist/docs/` for Next.js 16 APIs — they differ from older versions.
- `README.md` is the untouched `create-next-app` boilerplate; it is not a source of project-specific guidance.
