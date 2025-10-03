# NeoMaskan Task Breakdown

1. **Environment setup**
   - Install dependencies with `npm install`.
   - Configure environment variables when backend services are available (see `lib/mockApi.ts` for integration points).

2. **Brand & design parity**
   - Validate colors, typography, and spacing against the Inspire Maskan Figma.
   - Replace placeholder imagery with exported assets from the design system if available.

3. **Data integration**
   - Replace `lib/mockApi.ts` functions with real API calls or server actions.
   - Implement authentication and persist user context for dashboard data.
   - Connect smart search to a recommendation engine or search service.

4. **AI enhancements**
   - Plug Neo chatbot into an LLM endpoint (OpenAI, Azure OpenAI, etc.).
   - Upgrade `utils/recommender.ts` with a trained ranking model and telemetry feedback loop.
   - Add analytics to capture user interactions that feed AI personalization.

5. **Feature hardening**
   - Wire contact form to CRM or email automation.
   - Add state management for saved listings (e.g., using a database or API).
   - Implement map visualizations for property coordinates.

6. **Testing & accessibility**
   - Add unit and integration tests (React Testing Library / Playwright).
   - Perform accessibility audit and add ARIA enhancements where needed.
   - Configure CI/CD for linting, testing, and previews.

7. **Deployment**
   - Set up hosting (Vercel recommended for Next.js).
   - Configure environment secrets for production services.
   - Monitor performance and logging with chosen observability stack.
