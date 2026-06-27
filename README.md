# Spain 2027 — Day-by-Day Map (Two Itineraries)

An interactive day-by-day map and itinerary for our September 2027 trip. Use the
toggle at the top to switch between two options:

- **Option A — Andalucía (The South):** Málaga → Granada → Córdoba → Seville.
- **Option B — Castile (Toledo & the Center):** Madrid · Segovia · Cuenca · Toledo — a rail-based trip built around Toledo, with the Prado/Guernica, the Guadarrama and Ciudad Encantada hikes, and the Tajo gorge. Round-trip Madrid, ~$8–10k for two.

Tap a numbered pin for that day's plan, or step through the trip with the ‹ › buttons. Toggle Map / Satellite, top-right.

## View it
- **Live site:** https://artcentered.github.io/spain-2027/
- **Local:** open `index.html` in any browser.

## Files
- `index.html` — the interactive map + itinerary (this is the site)
- `photos/` — the images used by the map

## Deploy to GitHub Pages (free hosting → one link to share)
1. Create a new GitHub repo (e.g. `spain-2027`) and push this folder to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, pick your default branch (`main` or `master`) and folder `/ (root)`, Save.
3. Wait ~1 minute; your link appears at the top of the Pages settings. Share that with Mike.

## Iterating on the itinerary
All the trip content lives in the `<script>` block in `index.html`, inside the `itineraries` object — one entry per option (`andalucia`, `castile`), each with its `stops` (map pins), `routes` (map lines), and `days` array. Each day has a title, date, activity list (`acts`), tag, and either `imgs` (photo gallery) or a `hero` emoji (used for a designed gradient card when there's no photo yet). Edit text there and re-commit; the site updates automatically after each push.

_Note: map background tiles load from the internet, so view it online or on wifi/data (not airplane mode). The photos themselves load from `photos/`._
