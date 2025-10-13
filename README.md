    # Menno van Gils — Cinematic Next.js Portfolio (Updated)

    This updated starter adopts a cinematic, high-contrast style and a black/beige color theme derived from the logo.

    ## What changed
    - Cinematic hero on the homepage with a dark overlay and large headline.
    - Custom Tailwind colors: brand (beige) and ink (black).
    - Dark mode default enabled; toggle in navbar switches theme.
    - Work page uses large thumbnails with hover scale.
    - Clean About and Contact pages with CV download and booking form.

    ## Setup
    1. Replace `/public/logo.png` with your uploaded logo (transparent PNG recommended).
    2. Add a high-res hero image as `/public/hero.jpg` (optional — page falls back to dark overlay if absent).
    3. Replace `/public/MennoVanGils_CV.pdf` with your real CV (same filename).
    4. Install and run:

   ```bash
   npm install
   npm run dev
   ```

    ## Notes
- Tailwind version pinned to 3.4.14 to avoid ETARGET errors.
- Update YouTube IDs in `pages/work.js` to show your videos.
