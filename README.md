# Brandstory – Abu Dhabi Landing Page (React + Vite)

Responsive landing page built from the provided design (Junior Associate – Web Developer assessment).

## Setup
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output in /dist
npm run preview
```
Deploy: push to GitHub, import in Vercel (framework preset: Vite, no env vars).

## Technologies
React 18 · Vite 5 · Tailwind CSS 3 · JavaScript (ES6+) · Fetch API

## Folder structure
```
index.html                  # SEO meta + font
public/content.json         # JSON data consumed via fetch (team, FAQs, case studies)
src/
  main.jsx, App.jsx, index.css
  components/
    sections/               # Header, Hero, Services, About, Differentiators, TrustedPartner,
                            # Stats, Team, Faq, CaseStudies, Footer, Locations
    ui/                     # Button, Accordion, Carousel, Counter, Icon, SectionTitle, Visual
  hooks/                    # useContent (fetch + shared cache), useInView
  lib/data.js               # page copy
```

## Assumptions
- Figma could not be opened directly; layout, colours and copy come from the supplied screenshot. Tokens are in `tailwind.config.js`.
- Photos/logos are gradient or text placeholders; replace with exported Figma assets (use `loading="lazy"`, `srcset`/`sizes`).
- Team, FAQ and case-study data are fetched from `/content.json` to demonstrate API integration; swap the URL for a real endpoint when available.
- Accessibility: ARIA on accordion/carousel, visible focus, `prefers-reduced-motion` respected.
