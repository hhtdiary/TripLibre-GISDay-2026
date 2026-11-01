# Build a New TripLibre GIS Day 2026 Presentation

## Project Objective

Create a **new, standalone web presentation** specifically for the University of Pennsylvania GIS Day on November 17, 2026.

This is a new repository and a separate presentation project.

The existing repository, `hhtdiary/TripLibre-pitch`, is a long-form presentation and permanent public showcase. **Do not modify, refactor, overwrite, or simplify that repository.**

You may inspect it as a reference and reuse appropriate content, evidence, and assets, but all implementation must take place in the new GIS Day project.

## Presentation Concept

**Title:** A Travel Diary That Doesn't End

**Subtitle:** From transportation research to building TripLibre with AI

**Speaker:** Zhanchao Yang, University of Pennsylvania

**Target:** 12–15 minutes, approximately 13 slides.

This presentation tells a personal research journey:

How a transportation researcher began working with household travel survey data, encountered the practical difficulties of collecting travel behavior, and eventually developed TripLibre with AI-assisted software development.

This is not an AI tools tutorial, a commercial product pitch, or a detailed software engineering presentation.

## Proposed Slide Structure

| # | Title | Main Content |
|---|---|---|
| 01 | A Travel Diary That Doesn't End | Cover |
| 02 | Where It All Started | Erick Guerra's transportation planning course and first exposure to HHTS |
| 03 | From Data to Research | Twin Cities telework thesis and one key finding |
| 04 | Seeing the Other Side | Philadelphia HHTS participation and GPS data collection difficulties |
| 05 | What If the Diary Never Ended? | Why a reusable, user-controlled travel diary became interesting |
| 06 | Meet TripLibre | Actual app screenshots and product demonstration |
| 07 | I Couldn't Build This Alone | Zhanchao, ChatGPT, Claude Code, and Codex |
| 08 | How I Got Started | Describe → Prototype → Iterate |
| 09 | One Feature, One Development Story | Real GitHub issue, AI implementation, review, and correction |
| 10 | Sometimes, Less Is Better | Human correction vs. excessive automatic inference |
| 11 | What Actually Worked? | Product achievements, testing, and current limitations |
| 12 | What I Learned | AI implementation vs. human judgment |
| 13 | Thank You / Try TripLibre | Acknowledgments, QR code, and closing question |

## Slide 08 — How I Got Started

Headline:

**I started with a problem, not a codebase.**

Three steps:

**01 — Describe**

What should the app actually do?

**02 — Prototype**

Build the smallest working version.

**03 — Iterate**

Try it, identify mistakes, and improve.

Closing line:

*No complete roadmap. No software team. Just a research question and a working prototype.*

Keep the slide simple, visually driven, and personal.

## Narrative Guidelines

### Starting point comes first

Spend approximately one-third of the talk establishing the research background.

Explain how a bounded travel survey became the inspiration for a different type of tool.

Do not introduce AI immediately.

### Show, don't explain everything

Prioritize actual screenshots, short screen recordings, simple diagrams, and one concrete development example.

Use the actual one-tap stop-stamping development cycle from the existing pitch as a reference.

Avoid unnecessary organizational diagrams, cost comparisons, model leaderboards, and technical workflow details.

### Explain AI roles simply

- Zhanchao: Research direction, requirements, product decisions, final acceptance.
- ChatGPT: Planning, design reasoning, trade-offs, and task decomposition.
- Claude Code: Implementation.
- Codex: Code review.

These are representative roles, not exclusive boundaries.

### Keep the reflection grounded

Explain what AI made possible without claiming that software validation, research methodology, or human accountability became unnecessary.

Do not invent performance, speed, cost, or accuracy claims.

## Design Direction

Create a clean, modern, visually appealing 16:9 presentation optimized for live projection.

- One major message per slide.
- Large typography.
- Minimal visible text.
- Strong visual hierarchy.
- Actual TripLibre images and screenshots.
- Consistent TripLibre-inspired design language.
- Simple transitions.
- Keyboard navigation.
- Optional presenter notes.
- Responsive viewing on smaller screens.

Avoid overengineering the presentation website itself.

A single coherent theme is enough. Do not recreate the previous project's five-theme system or complex interactive framework.

## Technical Implementation

Build this as a standalone lightweight web presentation using React, TypeScript, and Vite, unless an even simpler solution is clearly justified.

The new repository should be independently buildable and deployable.

Reuse existing media assets where licensing permits, but keep necessary assets in the new project so the presentation does not depend on the older website remaining deployed.

Maintain proper source attribution.

## Source Repositories

Long-form reference presentation:

https://github.com/hhtdiary/TripLibre-pitch

TripLibre application:

https://github.com/hhtdiary/TripLibre

Official product website:

https://triplibre.hhtdiary.org

Umbrella organization:

https://hhtdiary.org

Use these sources to verify existing claims, visual assets, and development examples.

The long-form pitch repository must remain untouched.

## Deliverables

Create the complete new GIS Day presentation project, including:

1. A working 13-slide web presentation.
2. Speaker notes appropriate for a 12–15 minute talk.
3. Reused or newly designed visual components.
4. Real TripLibre screenshots where available.
5. A documented placeholder for any missing video or research figure.
6. A concise README with local development and presentation instructions.
7. A production build that passes validation.

Do not invent missing assets or imply that placeholders are verified research evidence.

Do not modify the existing `TripLibre-pitch` repository.

## Closing Message

End the presentation with:

**What should researchers build when building software is no longer the biggest barrier?**

The audience should leave understanding three things:

1. Why TripLibre was created.
2. How a transportation researcher used AI to build it.
3. Why human judgment, correction, and research validity still matter.

**Guiding principle:**

Tell one memorable story. Show the actual product. Use concrete examples. Keep everything else simple.