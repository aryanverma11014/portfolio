# Aryan Verma Portfolio

Modern developer portfolio for Aryan Verma, an aspiring Backend Developer focused on scalable APIs, authentication systems, databases, and production-ready backend services.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- next-themes

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run type-check
```

## Project Structure

```text
src/
  app/
    api/contact/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    sections/
    ui/
  hooks/
  lib/
  types/
public/
  resume.pdf
```

## Customization

- Update profile, links, skills, projects, timeline, and GitHub highlights in `src/lib/data.ts`.
- Replace `public/resume.pdf` with the final resume.
- Connect `src/app/api/contact/route.ts` to an email provider, database, or webhook for production.
- Update `metadataBase`, sitemap, and robots URLs before deploying to a custom domain.

## Deployment

The app is Vercel-ready.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.
4. Set the production domain and update metadata URLs.

Recommended checks before deployment:

```bash
npm run type-check
npm run build
```
