# Anjula Portfolio

A modern personal portfolio site built with React, Vite, and Tailwind CSS. Clean SaaS-style UI for a financial protection advisor.

## Sections

- Navbar (sticky, responsive)
- Hero
- About
- Services (5 card categories)
- Awards
- Testimonials
- Contact (Formspree email form)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io)
2. Copy `.env.example` to `.env`
3. Set `VITE_FORMSPREE_FORM_ID` to your form ID

```bash
cp .env.example .env
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Add environment variable `VITE_FORMSPREE_FORM_ID`
4. Deploy — `vercel.json` is preconfigured

### Netlify

1. Push the repo to GitHub
2. Import at [netlify.com](https://netlify.com)
3. Build command: `npm run build`, publish directory: `dist`
4. Add `VITE_FORMSPREE_FORM_ID` in site environment variables
5. `netlify.toml` is preconfigured

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- lucide-react (icons)
- @formspree/react (contact form)
