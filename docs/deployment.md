# Deployment

## How it works

Railway auto-deploys every push to `main` on GitHub. There is no staging environment, so:

1. Run `npm run check` (lint + typecheck + build) locally before pushing.
2. Push to `main`.
3. Railway builds the `Dockerfile` and swaps the deployment.

GitHub Actions (`.github/workflows/ci.yml`) runs the same lint/typecheck/build on every push and PR as a second gate.

## The Dockerfile is Railway-specific

The `RUN --mount=type=cache,id=s/<service-id>-npm-cache,...` lines pin BuildKit cache mounts to our Railway service id. History behind this:

- The original template Dockerfile used plain cache mounts. Railway's builder requires the cache `id` to be namespaced with the service id, or the build fails/thrashes cache.
- Railway's own agent fixed this in PRs #1/#2 (merged directly on GitHub). If you regenerate or edit the Dockerfile, keep those `id=s/...` values intact.

Practical rule: if a build passes locally but fails on Railway, suspect your change first and the Dockerfile last — it has been stable since the cache-mount fix.

## Local production parity

```bash
npm run build
npm run start   # serves the exact build Railway would run, on :3000
```

## Environment

No environment variables are required (see `.env.example`). If one is added, set it in the Railway service settings as well as documenting it in `.env.example`.
