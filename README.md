# HS Partners

React + TypeScript website for HS Partners.

## Run locally

```sh
npm install
npm run dev
```

## Build for deploy

```sh
npm run build
```

This creates a static `dist/` folder. Upload that folder to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host.

- **Vercel / Netlify:** connect the repo and set build command `npm run build`, publish directory `dist`.
- SPA routing is already handled (`vercel.json` and `public/_redirects`).
