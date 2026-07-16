<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the Bodhicentral Next.js App Router application. The integration covers client-side initialization via `instrumentation-client.ts`, a reverse proxy through Next.js rewrites, a server-side PostHog Node client for tracking server actions, and 14 custom events across authentication flows, pricing interactions, and the scripture reader.

## Files created or modified

| File | Change |
|------|--------|
| `instrumentation-client.ts` | New — initializes posthog-js with reverse proxy, exception capture, and debug mode |
| `next.config.mjs` | Modified — added `/ingest/*` reverse proxy rewrites and `skipTrailingSlashRedirect: true` |
| `src/lib/posthog-server.ts` | New — singleton PostHog Node client for server-side capture |
| `src/app/[locale]/(marketing)/(login)/actions.ts` | Modified — server-side capture for sign-in/sign-up outcomes + `identify` calls |
| `src/components/shared-assets/login/login-card-combined.tsx` | Modified — captures `sign_in_submitted` and `sign_in_with_google_clicked` |
| `src/components/shared-assets/signup/signup-card-combined.tsx` | Modified — captures `sign_up_submitted` and `sign_up_with_google_clicked` |
| `src/app/[locale]/(marketing)/plans/page.tsx` | Modified — captures `plan_billing_period_toggled` and `plan_get_started_clicked` |
| `src/app/reader/page.tsx` | Modified — captures ancillary panel toggle, tab switches, gated feature encounters, and downloads |

## Events tracked

| Event name | Description | File |
|------------|-------------|------|
| `sign_in_submitted` | User submits the email/password sign-in form. | `src/components/shared-assets/login/login-card-combined.tsx` |
| `sign_in_with_google_clicked` | User clicks the Sign in with Google button. | `src/components/shared-assets/login/login-card-combined.tsx` |
| `sign_up_submitted` | User submits the email/password sign-up form. | `src/components/shared-assets/signup/signup-card-combined.tsx` |
| `sign_up_with_google_clicked` | User clicks the Sign up with Google button. | `src/components/shared-assets/signup/signup-card-combined.tsx` |
| `plan_billing_period_toggled` | User switches between monthly and annual billing. | `src/app/[locale]/(marketing)/plans/page.tsx` |
| `plan_get_started_clicked` | User clicks the Get started CTA on a pricing plan card. | `src/app/[locale]/(marketing)/plans/page.tsx` |
| `reader_ancillary_panel_toggled` | User opens or closes the ancillary panel in the reader. | `src/app/reader/page.tsx` |
| `reader_ancillary_tab_switched` | User switches to a different tab in the reader ancillary panel. | `src/app/reader/page.tsx` |
| `reader_gated_feature_encountered` | User attempts to access a tab requiring a higher subscription plan. | `src/app/reader/page.tsx` |
| `reader_text_download_clicked` | User clicks a download button (PDF, TXT, or HTML) in the reader. | `src/app/reader/page.tsx` |
| `sign_in_completed` | User successfully authenticated via email/password (server-side). | `src/app/[locale]/(marketing)/(login)/actions.ts` |
| `sign_in_failed` | User sign-in attempt failed (server-side). | `src/app/[locale]/(marketing)/(login)/actions.ts` |
| `sign_up_completed` | User successfully created a new account (server-side). | `src/app/[locale]/(marketing)/(login)/actions.ts` |
| `sign_up_failed` | User sign-up attempt failed (server-side). | `src/app/[locale]/(marketing)/(login)/actions.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/513325/dashboard/1851781)
- **Signup funnel**: [Signup funnel (wizard)](https://us.posthog.com/project/513325/insights/WV6NZwTA)
- **Auth trends**: [Authentication events over time (wizard)](https://us.posthog.com/project/513325/insights/BwRqlcDO)
- **Plan CTA clicks**: [Plan get started clicks by plan (wizard)](https://us.posthog.com/project/513325/insights/kXg28lip)
- **Reader engagement**: [Reader engagement (wizard)](https://us.posthog.com/project/513325/insights/ZXwZdbxI)
- **Sign-in outcomes**: [Sign-in outcomes (wizard)](https://us.posthog.com/project/513325/insights/HemnYIOL)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Confirm the returning-visitor path also calls `identify` — a handler that only identifies on fresh login can leave returning sessions on anonymous distinct IDs. Consider calling `identify` in your Supabase auth listener (e.g. `supabase.auth.onAuthStateChange`) on page load when a session already exists.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
