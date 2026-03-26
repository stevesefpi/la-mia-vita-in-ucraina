# La Mia Vita in Ucraina

## Stack
- Next.js App Router (v16), React 19
- next-intl v4 for i18n — 2 locales: `it` (default, no URL prefix), `en` (`/en/` prefix)
- Supabase for blog post storage
- Upstash Redis for rate limiting on the contact form API
- CSS Modules for all component styles
- Vercel Analytics

## Folder structure
- `src/app/[locale]/` — all pages, wrapped by locale
- `components/` — shared UI components (`.js` + `.module.css` pairs)
- `lib/` — data fetching: `fetchPost.js`, `fetchPosts.js`, `cachedPost.js`, `supabase.js`
- `messages/it.json`, `messages/en.json` — all UI strings
- `src/i18n/routing.js` — locale routing config

## Pages
`/`, `/about`, `/blog`, `/blog/[slug]`, `/contatti`, `/traduzione-intervista`, `/guide/viaggio-ucraina`
Each exists in both IT (no prefix) and EN (`/en/`) variants.

## Conventions
- All UI text uses next-intl `useTranslations()` — strings live in `messages/`
- Components are plain `.js` files (not `.tsx`) with a co-located `.module.css`
- Blog posts are fetched from Supabase; `cachedPost.js` wraps individual post fetches with Next.js caching

## Env vars
`NEXT_PUBLIC_BASE_URL`, Supabase URL + anon key, Upstash Redis URL + token, email credentials (for contact form via nodemailer)
