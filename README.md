# Fractum

A browser-based breakout game with procedurally generated levels, a chiptune soundtrack, and a global high score leaderboard. Basically just a vibecoding test using Claude Sonnet (4.6).

**Play it:** https://tmu-k.github.io/fractum/

---

## How to play

Break all the bricks to advance to the next level. Don't let the ball fall off the bottom.

| Control | Action |
|---|---|
| Mouse / touch | Move paddle |
| Click / tap | Launch ball |
| Space | Pause |

---

## Features

- **Procedurally generated levels** — every level has a unique layout and colour palette drawn from 12 named patterns (Chaos, Grid, Pyramid, Spire, Crystal, Mirror, Slash, Citadel, Nebula, Bars, Nexus, Wave)
- **Power-ups** — catch falling capsules to activate effects:
  - **WIDE** — wider paddle
  - **MULTI** — triple ball
  - **SLOW** — slows the ball
  - **LIFE** — extra life
  - **FIRE** — cannon mode, shoot bricks directly
- **Armoured bricks** — tougher bricks that take multiple hits
- **Chiptune music** — procedural drum-and-synth soundtrack that changes with each level
- **Global high scores** — top 10 leaderboard powered by Supabase, shared across all players

---

## Running locally

Just open `index.html` in a browser — no build step, no dependencies, works from `file://` too.

---

## Tech

- Vanilla JS + Canvas 2D — no frameworks
- Web Audio API for all sound and music
- Supabase for the global leaderboard
