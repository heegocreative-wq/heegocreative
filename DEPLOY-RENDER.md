# Heego Creative — Render Deployment

## Important
The current CMS uses SQLite (`data/heego.db`). Render Free Web Services use ephemeral storage, so SQLite data/uploads can be lost after redeploy, restart, or spin-down. Use this free deployment for testing/preview first. For a production CMS, migrate the database to PostgreSQL and store uploads in persistent/object storage.

## Render settings
- Service type: Web Service
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Plan: Free (for testing)
- Node: 22.5.0+

## Environment variables
Set these in Render:
- `ADMIN_EMAIL` = your real admin email
- `ADMIN_PASSWORD` = a strong unique password
- `JWT_SECRET` = a long random secret (Render can generate it)

Do NOT put real secrets in GitHub.

## Custom domain
After deployment:
1. Open Render service → Settings → Custom Domains.
2. Add your domain, e.g. `heegocreative.com`.
3. Copy the DNS record Render gives you.
4. Add it at your domain provider.
5. Return to Render and verify.

Render automatically provides HTTPS/TLS for custom domains.
