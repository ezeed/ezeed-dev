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

## Credits

Based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio).
