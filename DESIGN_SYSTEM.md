# Telkie website — design system

Reference for anyone (human or AI agent) adding or editing sections on this site. Compose the primitives below rather than hand-writing new one-off section markup — it keeps new sections visually consistent with the rest of the site automatically.

## Color tokens

Defined in `src/app/globals.css` as CSS variables, mapped into Tailwind via the `@theme inline` block, so they're usable as `bg-*`, `text-*`, `border-*` utility classes (e.g. `bg-bg-panel`, `text-fg-muted`, `border-border`).

| Token | Value | Use |
|---|---|---|
| `bg` | `#f7f5f0` | Page background (warm cream) |
| `bg-raised` | `#ffffff` | Elevated surfaces (nav backdrop, pure-white panels) |
| `bg-panel` | `#f1eee6` | Card/panel fill — always used at `/60` or `/70` opacity over `bg` |
| `border` | `#5E5E5E` | Stronger border (ghost button outline, hovered cards, pills) — ≥3:1 against `bg`, per WCAG 1.4.11 for interactive-element boundaries |
| `border-soft` | `#c4beb0` | Default section/card divider — intentionally softer/decorative, not a component boundary |
| `fg` | `#3a3a3d` | Primary text (charcoal) |
| `fg-muted` | `#6b6b6e` | Secondary/body text |
| `fg-faint` | `#706e6a` | Tertiary text (labels, captions, footer copy) — ≥4.5:1 against `bg`, meets WCAG AA for normal-size text |
| `accent` | `#2c5468` | Brand navy-teal — primary buttons, highlighted text, links |
| `accent-text` | `#24475a` | Accent color tuned for text-on-cream contrast (icon tints, eyebrows) |
| `accent-dim` | `#1c384a` | Hover/active state for accent surfaces |
| `accent-fg` | `#ffffff` | Text/icon color on top of an accent-filled surface |

These come from the Telkie sales deck's color language (warm cream + charcoal + deep navy-teal), not the framework defaults — don't reintroduce raw hex values or Tailwind's stock palette (`blue-500`, `gray-900`, etc.) in new components; always go through the tokens.

## Spacing & shape conventions

- Section rhythm: `py-24 sm:py-32`, separated by `border-t border-border-soft` (the hero is the one exception — no top border, tighter `pt-20 pb-16 sm:pt-28 sm:pb-24`).
- Panel/card radius: `rounded-2xl`. Pills and buttons: `rounded-full`.
- Content width: everything sits inside `Container` (`max-w-6xl`); text-only sections additionally cap prose at `max-w-2xl` via `SectionHeading`.

## Component inventory

**Layout primitives**
- `Container` (`container.tsx`) — page-width wrapper (`max-w-6xl`, responsive padding). Every section's content sits inside one.
- `SplitSection` (`split-section.tsx`) — the two-column "copy beside media" layout used by `Hero`, `ScanToService`, and `CTA`. Props: `copy`, `media` (both `ReactNode`), `reverse` (flips column order on `lg:`), `bordered` (default `true`, set `false` to drop the top border — used by `Hero`), `padding` (override the default `py-24 sm:py-32`), `id`. Use this for any new "explain this, show a photo/screenshot of it" section instead of writing a new grid. (`Showcase` looked like a candidate but is a single centered column — heading/copy on top, full-width screenshot below — so it doesn't use `SplitSection`.)
- `ImageBand` (`image-band.tsx`) — full-bleed photo section with an optional one-line caption underneath, for a standalone lifestyle-photo moment that doesn't need paired copy. Built and available, but not currently placed in `page.tsx` — reach for it when a future section needs a photo with no accompanying text block.
- `Card` (`card.tsx`) — the bordered/filled panel (`rounded-2xl border border-border-soft bg-bg-panel/60`) used for feature cards, the pricing card, and the product-screenshot frame. Pass `hover` to add the hover-border transition (used on interactive-feeling cards like feature tiles, not on static ones like the screenshot frame).
- `SectionHeading` (`section-heading.tsx`) — eyebrow + title + optional description, `align="center" | "left"`.

**Content primitives**
- `Button` (`button.tsx`) — `variant="primary" | "ghost"`. Primary = filled accent pill; ghost = outlined.
- `Reveal` (`reveal.tsx`) — scroll/mount fade-up wrapper; wrap each independently-timed piece of a section in its own `Reveal` with a staggered `delay` (see any existing section for the pattern).
- `icons.tsx` — inline SVG icon set, sized/colored via `currentColor` + Tailwind sizing classes.

## Imagery guidelines

- Source photography lives in `public/images/lifestyle/` (JPEG, resized to ~1600px max width, ~75–80% quality — keep new additions under ~400KB; this is a static-exported site, no image optimization pipeline runs at build time).
- Treatment: full-bleed inside a `rounded-2xl border border-border-soft` frame (what `SplitSection`'s `media` slot and `ImageBand` both do) — don't add drop shadows or heavy effects beyond that; the deck/Golvhuset reference is minimal, not glossy.
- Pick images that show a real hotel context, a WeChat/product moment, or both together — avoid stacking two visually similar lobby/desk shots back-to-back on the page.
- Logo: use `public/images/logo/telkie-logo-color.png` (full-color, for the light background). The white SVG (`telkie-logo-white.svg`) is left in place but unused — only reach for it if a future section reintroduces a dark surface.
- All images use plain `<img>` (with the `@next/next/no-img-element` eslint-disable comment), never `next/image` — this repo builds with `output: "export"` and has already opted out of Next's image optimizer for that reason.

## Adding a new section

1. Reach for `SplitSection` (copy + photo/screenshot) or `ImageBand` (photo alone) before writing new grid/flex markup.
2. Wrap copy in `SectionHeading` if it has an eyebrow/title/description; wrap timed pieces in `Reveal`.
3. Any boxed content goes in `Card`.
4. Only use tokens from the color table above — no new hex values.
