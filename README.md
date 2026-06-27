# Spain 2027 — Andalucía Trip (Day-by-Day Map)

An interactive day-by-day map and itinerary for our September 2027 trip:
**Málaga → Granada → Córdoba → Seville.** Tap a numbered pin for that day's plan, or step through the trip with the ‹ › buttons. Toggle Map / Satellite, top-right.

## View it
- **Live site:** _(add your GitHub Pages URL here once deployed, e.g. https://USERNAME.github.io/spain-2027/)_
- **Local:** open `index.html` in any browser.

## Files
- `index.html` — the interactive map + itinerary (this is the site)
- `photos/` — the images used by the map

## Deploy to GitHub Pages (free hosting → one link to share)
1. Create a new GitHub repo (e.g. `spain-2027`) and push this folder to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, pick your default branch (`main` or `master`) and folder `/ (root)`, Save.
3. Wait ~1 minute; your link appears at the top of the Pages settings. Share that with Mike.

## Iterating on the itinerary
All the trip content lives in the `<script>` block near the top of `index.html`, in the `days` array — each day has a title, date, activity list (`acts`), tag, and `imgs`. Edit text there and re-commit; the site updates automatically after each push.

_Note: map background tiles load from the internet, so view it online or on wifi/data (not airplane mode). The photos themselves load from `photos/`._
