# 47 Sunset Studios — Launch Checklist

A practical checklist to work through before the first public release.

---

## DNS & Domain

- [ ] Domain registered and ownership verified (e.g. Namecheap, Google Domains, Cloudflare Registrar)
- [ ] DNS records pointed at Cloudflare Pages (`CNAME` / `A` records configured)
- [ ] SSL/TLS mode set to **Full (strict)** in Cloudflare dashboard
- [ ] `www` redirect configured (www → apex or vice-versa, never both)
- [ ] Confirm `NEXT_PUBLIC_SITE_URL` matches the production domain exactly

---

## Cloudflare Pages Setup

- [ ] New Pages project created and linked to this GitHub repository
- [ ] **Build command** set to `npm run build`
- [ ] **Build output directory** set to `out`
- [ ] **Node.js version** set to `20` (or higher) in Pages settings
- [ ] Preview deployments enabled for pull requests
- [ ] Custom domain added and active in the Pages project

---

## Environment Variables

Set these in **Cloudflare Pages → Settings → Environment variables**:

- [ ] `NEXT_PUBLIC_SITE_URL` — canonical production URL (e.g. `https://47sunsetstudios.com`)
- [ ] `NEXT_PUBLIC_ANALYTICS_ID` — analytics provider token (if applicable)
- [ ] `RESEND_API_KEY` — transactional email key (if contact form is active)
- [ ] Any additional Cloudflare-specific variables (e.g. `CF_KV_NAMESPACE_ID`)

---

## Metadata & SEO

- [ ] `<title>` and `<meta name="description">` set in `src/app/layout.tsx`
- [ ] `metadataBase` URL matches production domain
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter / X card tags present (`twitter:card`, `twitter:image`)
- [ ] `public/robots.txt` present and allows crawling
- [ ] `sitemap.xml` generated or added to `public/` (and referenced in `robots.txt`)

---

## Favicon & Icons

- [ ] `public/favicon.ico` present (32 × 32 minimum)
- [ ] `public/apple-touch-icon.png` added (180 × 180)
- [ ] `public/icon-192.png` and `public/icon-512.png` added for PWA / Android
- [ ] `src/app/icon.tsx` (or `icon.png`) added for Next.js App Router icon generation

---

## Social Card Image

- [ ] `public/og-image.png` created at **1200 × 630 px**
- [ ] Image includes studio name, tagline, and brand colours
- [ ] OG image previewed via [opengraph.xyz](https://www.opengraph.xyz) or similar tool
- [ ] Twitter card previewed via [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

---

## Accessibility

- [ ] Skip-to-content link present and functional (Tab from top of page)
- [ ] All interactive elements reachable and operable via keyboard
- [ ] Colour contrast meets WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text)
- [ ] Heading hierarchy is logical (`h1` → `h2` → `h3`)
- [ ] All images have descriptive `alt` attributes (or `alt=""` for decorative)
- [ ] `lang` attribute set on `<html>` element

---

## Performance

- [ ] Lighthouse score ≥ 90 across Performance, Accessibility, Best Practices, SEO
- [ ] No render-blocking resources
- [ ] Images optimised (compressed, correct dimensions, WebP/AVIF where possible)
- [ ] Fonts loaded with `display: swap` or equivalent

---

## Final Verification

- [ ] Production deployment succeeds with no build errors
- [ ] All pages load correctly at the production URL
- [ ] HTTPS enforced — no mixed-content warnings
- [ ] Console free of errors and warnings
- [ ] Contact / CTA links (email, social) tested and functional
- [ ] Preview deployment URL shared with stakeholders for sign-off
