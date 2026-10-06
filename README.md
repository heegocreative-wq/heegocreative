# Heego Creative — Real Admin CMS

This version turns the original static Heego Creative website into a real local CMS.

## What is included
- Node.js HTTP server
- SQLite database using Node 22's built-in `node:sqlite`
- Secure admin login with scrypt password hashing
- Server-side sessions stored in SQLite
- Real CRUD APIs for Services, Portfolio and Packages
- Website Settings stored in SQLite
- Contact form stored as Messages in SQLite
- Public pages read their content from the database
- Admin dashboard with Light/Dark mode
- Responsive admin UI

## Requirements
- Node.js **22.5+** (Node 22 LTS recommended)
- No `npm install` is required. There are no external runtime packages.

## Run
1. Open a terminal in this folder.
2. Run:
   `node server.js`
3. Open:
   `http://localhost:3000/`
4. Admin:
   `http://localhost:3000/admin.html`

## Default admin login
- Email: `admin@heegocreative.com`
- Password: `ChangeMe123!`

Change the default password before putting the site online. The default credentials are only for initial local setup.

## Data
The database is created automatically at `data/heego.db`.

## Important for deployment
This project is ready as a real server-backed CMS, but for public hosting you should run it behind HTTPS and a reverse proxy, set a strong admin password, and use a strong session/security configuration. The current server is intentionally simple for local/self-hosted use.

## Render
A `render.yaml` and `DEPLOY-RENDER.md` are included for deployment. Note: Render Free has an ephemeral filesystem, so the SQLite database and local uploads are not persistent. For production, migrate to PostgreSQL/object storage.
