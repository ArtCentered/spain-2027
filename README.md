# Sol y Norte — Spain 2027 trip companion

Travis & Mike's installable, offline-friendly companion for the 2027 trip: **the total solar eclipse of Mon 2 Aug from Fuengirola (base: Málaga) → Iryo + Alvia north → San Sebastián & Bilbao.**

- **Live app:** https://artcentered.github.io/spain-2027/ — on iPhone: open in Safari → Share → *Add to Home Screen*.
- **Overview page (big map, shareable):** https://artcentered.github.io/spain-2027/eclipse/
- **Earlier plans:** `mallorca.html` (the "Mar i Muntanya" Mallorca companion), `options.html` (pre-planning options).

## Tabs
- **Today** — countdown to departure, a live countdown-to-totality clock (Fuengirola times), the book-before-you-go list, and the day list. On trip days it shows that day's plan; on 2 Aug the eclipse clock ticks through the contacts.
- **Days** — 12 day cards (0–11) → each opens a timeline of events with map links, booking notes and photo galleries.
- **Map** — route lines (flights dashed, trains, bus, the C-1 eclipse ride), the totality centreline/limit, base pins, day pins (tap → that day).
- **Stays** — shortlists for Málaga / San Sebastián / Bilbao with **Website ↗** (hotel's own site) and **Map ↗** buttons.
- **Info** — flights/trains summary, key bookings (placeholders), getting around, transit cards, emergency, phrases.

## Files
- `index.html` — the whole app (data + UI). Trip content lives in `DAYS`, `STAYS`, `TODOS`, `ECL`.
- `sw.js` — service worker (offline cache `solynorte-v1`; bump when you change assets).
- `manifest.json`, `icons/` — PWA bits (icons still the Mallorca set — regenerate when you have an eclipse graphic).
- `photos/trip/day-NN/` — **drop photos here**; see `photos/trip/README.md` for the exact filenames. `photos/*.jpg` at the top level belong to the Mallorca app.
- `eclipse/` — the published copy of `01_Itinerary/Eclipse_Trip.html` from the planning folder.

## Deploy
Push to `main`; GitHub Pages serves the root. Credentials are in the macOS Keychain (plain `git push` works).
