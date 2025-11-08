
# VetsToTheRescue LLC – Static Site (Zero‑Build)

This repo contains a single‑file website for **VetsToTheRescue LLC**. It deploys instantly to Netlify with **no build step**.

## Files
- `index.html` – main site
- `logo.png` – header logo image
- `hero_truck.png` – hero section image
- `favicon.png` – browser tab icon (32×32)

## Deploy to Netlify
1. Create a new GitHub repository and upload all four files to the **root** (top level).
2. In Netlify → **Add new site** → **Import from Git**, connect your repo.
3. Netlify build settings:
   - Build command: **(leave blank)**
   - Publish directory: **/** (root)
4. Deploy. Your site should go live at your `.netlify.app` URL or your custom domain.

## Custom Domain
If you purchased `vetstotherescue.pro` via Netlify, go to **Domain settings → Custom domains** and attach it to this site. Netlify will issue SSL automatically.

## Contact Form
The form posts to Formspree. Replace `https://formspree.io/f/your-id` in `index.html` with your actual Formspree endpoint.

## Estimator Tests
Open browser DevTools → Console to see simple estimator PASS/FAIL test logs.

## Notes
- Tailwind and icons are loaded from CDNs—no npm install required.
- To change phone/email, edit the occurrences in `index.html`.
