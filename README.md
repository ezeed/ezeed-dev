# ezeed.dev

My personal portfolio website.

Built with Next.js 16, Tailwind CSS v4, shadcn/ui, Magic UI, and next-intl. Content is managed through Upstash Redis.

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy `.env.example` to `.env` and fill in your Upstash Redis credentials:

   ```bash
   cp .env.example .env
   ```

3. Seed the database:

   ```bash
   npx tsx src/scripts/seed.ts
   ```

4. Start the dev server:

   ```bash
   pnpm dev
   ```

## Rendering Strategy

Pages use **ISR (Incremental Static Regeneration)** with a 30-day cache (`revalidate = 2592000`). This means:

- Pages are statically cached after the first request.
- The cache automatically expires after 30 days.
- You can manually trigger revalidation at any time (see below).

### On-Demand Revalidation

Whenever you update content in Redis, trigger an immediate cache refresh:

```bash
curl -X POST https://ezeed.dev/api/revalidate?secret=YOUR_REVALIDATE_SECRET
```

**Setup:**

1. Generate a secure secret:
   ```bash
   openssl rand -base64 32
   ```

2. Add it to your local `.env` file:
   ```env
   REVALIDATE_SECRET=your-generated-secret
   ```

3. Add the same value to Vercel under **Settings → Environment Variables** with the name `REVALIDATE_SECRET`.

The endpoint returns `{ "revalidated": true }` on success and `401` if the secret is wrong.

## Credits

Based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio).
