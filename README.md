# NeoMaskan Web Experience

A Next.js + Tailwind CSS implementation of the Inspire Maskan digital product, re-imagined for the NeoMaskan brand. The project recreates the multi-page experience including marketing, listings, property detail, contact, and dashboard flows, complete with AI-assisted search and concierge chatbot.

## Features

- 🌐 **Full site navigation** covering home, listings, property detail, contact, dashboard, and settings.
- 🎨 **NeoMaskan branding** with custom palette, typography, and storytelling aligned to the Inspire Maskan concept.
- 🧠 **AI-inspired tools** including a natural language smart search and Neo the AI property copilot chatbot.
- 📦 **Mock data layer** implemented via local asynchronous stubs simulating listings, dashboard insights, and user profile data.
- 📱 **Responsive layouts** mirroring the Figma rhythm with Tailwind components and utility classes.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to explore the experience.

> **Note:** The project uses local mock APIs. Swap the functions in `lib/mockApi.ts` with real data fetching when integrating a backend.

## Project structure

```
app/
  (marketing)/
    page.tsx              # Home
    listings/             # Listings index & detail
    contact/              # Contact flow
  (dashboard)/
    dashboard/page.tsx    # Client dashboard hub
    settings/page.tsx     # Account settings surface
components/               # UI components, chatbot, etc.
context/                  # React context for chatbot state
lib/                      # Mock API stubs
utils/                    # Utility helpers & AI recommendation logic
```

## Extending the experience

- Replace the placeholder AI logic in `utils/recommender.ts` with real machine learning ranking.
- Connect the chatbot to an API-driven LLM for richer conversational support.
- Populate dynamic maps and analytics cards with live telemetry.
- Harden form submissions by wiring them to server actions or external services.

## License

This project is provided for demonstration purposes.
