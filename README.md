# TripLibre — GIS Day 2026

**A Travel Diary That Doesn't End** — 14-slide web presentation for University of Pennsylvania GIS Day, November 17, 2026.
Speaker: Zhanchao Yang. Target length: 12–15 minutes.

React + TypeScript + Vite. No router, no state library, one theme taken from TripLibre's design language
(cream paper, ink outlines, offset shadows, bright accents; Baloo 2 + Nunito from Google Fonts).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Presenting

| Key | Action |
|---|---|
| `→` `↓` `Space` `Enter` `PageDown` | next slide |
| `←` `↑` `Backspace` `PageUp` | previous slide |
| `Home` / `End` | first / last slide |
| `N` | show / hide speaker notes |
| `F` | fullscreen |

The slide number is in the URL (`#6`), so a reload keeps your place. The 1920×1080 stage scales to any window; touch swipe works on phones.
Animation is decorative only and is disabled under `prefers-reduced-motion`.
Open the page once online before the talk so the Google Fonts are cached (offline falls back to system rounded fonts).

## Where things are

- `src/slides.tsx` — all 14 slides and their speaker notes
- `src/media.ts` — optional media and links (see placeholders below)
- `src/styles.css` — design tokens and layout
- `public/assets/` — everything the deck needs; nothing depends on the older pitch site

## Placeholders (not verified research evidence)

- **Slide 03 chart** is a *schematic redraw* (no y-values) of the nonlinear telework result, labelled as such on the slide. Put the real thesis figure in `public/assets/` and set `MEDIA.thesisFigure` in `src/media.ts`.
- **Slide 10 (Atlanta)** is built from GitHub issues #4–#6; add your own "what I felt" line in its speaker note.
- **Slide 04 map** is an illustrative drawing, labelled as such.
- **Slide 06 demo video**: none yet; the slide shows phone mockups. Set `MEDIA.demoVideo` to show a real recording.
- **Slide 13 QR code** points to the product site until the App Store listing is live; set `LINKS.appStore` afterward. v2.1.0 was in App Store review at last report — do not say "live" until it is.

## Sources and attribution

Claims were checked against the long-form reference deck's evidence register (`hhtdiary/TripLibre-pitch`, read-only) and the TripLibre repository (`hhtdiary/TripLibre`, issues #32, #56, PRs #53, #59, commit `8a26c25`). That repository was not modified.

- App screenshots and icon: TripLibre release screenshots (simulator, demo data), Apache-2.0 — see `public/assets/TRIPLIBRE-LICENSE.txt`.
- Weitzman logo: taken from the inline SVG on <https://www.design.upenn.edu>; the property of the Stuart Weitzman School of Design / University of Pennsylvania, used here for identification of the speaker's affiliation only. Check Penn's brand guidelines if you redistribute the deck.
