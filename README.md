# 47 Sunset Studios — Landing Site

A dark-themed landing page for **47 Sunset Studios**, showcasing digital solutions.  
Built with **Next.js 16** (App Router), **TypeScript** (strict), and **Tailwind CSS v4**.  
Deployed on **Cloudflare Pages**.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/goblinsan/47-sunset-studios-landing-site.git
cd 47-sunset-studios-landing-site

# 2. Install dependencies
npm install

# 3. Copy the example env file and fill in values (optional for local dev)
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the Next.js development server with Turbopack |
| `npm run build`        | Create a production build                           |
| `npm run start`        | Start the production server locally                 |
| `npm run lint`         | Run ESLint across `src/`                            |
| `npm run lint:fix`     | Run ESLint and auto-fix issues                      |
| `npm run format`       | Format all files with Prettier                      |
| `npm run format:check` | Check formatting without writing                    |
| `npm run typecheck`    | Run TypeScript type-checking (no emit)              |

> **Tip:** Run `npm run typecheck && npm run lint && npm run format:check` before opening a PR.

---

## Project Structure

```
├── src/
│   ├── app/               # Next.js App Router pages and layouts
│   │   ├── layout.tsx     # Root HTML layout with metadata
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Global Tailwind CSS imports
│   ├── components/        # Shared React components
│   └── lib/               # Utility helpers (e.g. cn())
├── public/                # Static assets
├── .env.example           # Documented env var template
├── eslint.config.mjs      # ESLint flat config (Next.js + Prettier)
├── .prettierrc.json       # Prettier configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS / Tailwind CSS v4 configuration
└── tsconfig.json          # TypeScript strict configuration
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and set the variables you need:

```bash
cp .env.example .env.local
```

| Variable                   | Required | Description                           |
| -------------------------- | -------- | ------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | No       | Canonical base URL (used in metadata) |
| `NEXT_PUBLIC_ANALYTICS_ID` | No       | Analytics provider token              |
| `RESEND_API_KEY`           | No       | Transactional email API key           |
| `CF_KV_NAMESPACE_ID`       | No       | Cloudflare KV namespace ID            |

> **Never commit `.env.local`** — it is already in `.gitignore`.

---

## Deployment

### Cloudflare Pages (recommended)

1. Push to the `main` branch.
2. In the [Cloudflare Pages dashboard](https://pages.cloudflare.com/), create a new project pointing to this repository.
3. Set the **build command** to `npm run build` and the **output directory** to `.next`.
4. Add any required environment variables in the Cloudflare dashboard.
5. Configure your custom domain and SSL/TLS settings.

Refer to the [Cloudflare Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/) for detailed instructions.

---

## Contributing

Contributions are welcome! Please open an issue or submit a Pull Request.

Before submitting, make sure the following all pass:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

---

## License

This project is licensed under the [MIT License](LICENSE).
