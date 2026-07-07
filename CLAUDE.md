# CLAUDE.md

> This file stacks on top of the workspace root at `C:\Code\GitHub\`:
> - Root [`CLAUDE.md`](../../CLAUDE.md) -- voice, rules, routing map, references, skills, slash commands, conventions.
> - Root [`MEMORY.md`](../../MEMORY.md) -- live facts across repos.
> - Root [`STATUS.md`](../../STATUS.md) -- live PR/CI/security dashboard.
> - [`.claude/resources/`](../../.claude/resources/README.md) -- deep reference for collaboration, workflow, git, OSS, debugging, voice.
>
> Read those first. The guidance below only adds **repo-specific context** -- it does not override anything in the root.

## Project

MERN stack starter template: full-stack app with JWT auth, OTP email verification, and rate limiting. Scaffolding source for new repos in this workspace (see root CLAUDE.md "Creating a New Repo") -- not deployed anywhere itself.

## Stack

- **Language**: JavaScript (ESM throughout, no CommonJS), Node 22 (`.nvmrc`)
- **Framework**: React 19 + Vite 6 + React Router 7 (client); Express 5 + Mongoose 9 (server)
- **Database**: MongoDB (local or Atlas)
- **Package manager**: npm (three separate trees: root, `client/`, `server/`; no workspaces)
- **Deploy target**: none (template repo)

## Run

```
npm run install-all              # installs root + server + client deps
cp server/.env.example server/.env   # then fill values
npm run dev                      # concurrently: client on :3000, server on :5000
npm run build                    # vite build (client only)
```

`npm run server` / `npm run client` run each half alone.

## Test

No test suite. Client has `npm run lint` (ESLint 9 flat config); root has Prettier with organize-imports.

## Entry points

- `server/index.js` -- Express app: CORS, route mounting, Mongo connect, listen
- `client/src/main.jsx` -- React root
- `client/src/App.jsx` -- router configuration

## Key files

- `server/routes/` + `server/controllers/` -- MVC pairs (auth, user)
- `server/middleware/authMiddleware.js` -- JWT guard (`authenticateUser`)
- `server/models/` -- Mongoose schemas: User, OTP
- `client/src/api/` -- Axios instance and API calls
- `client/vite.config.js` -- dev proxy to backend
- `server/.env.example` -- source of truth for required env vars

## Gotchas

- Server hard-exits if `DB_CONNECTION_STRING` is missing or Mongo is unreachable -- copy and fill `server/.env` before `npm run dev`.
- Vite proxy only forwards `/auth`, `/users`, `/token-check`. New backend route prefixes must be added to `client/vite.config.js` or the client gets 404s in dev.
- OTP email flows need real `EMAIL_ID` / `EMAIL_PASSWORD` (nodemailer); without them signup verification and password reset fail at send time.
- Express 5 and Mongoose 9: use current APIs, older MERN snippets (Express 4 middleware patterns, Mongoose callbacks) will not work.

## Repo-specific rules

- Uses npm, not pnpm -- root scripts and `install-all` are npm-wired. Keep it npm unless migrating all three package trees at once.
- This is a template: changes here propagate to every repo scaffolded from it. Keep it generic; no project-specific features.

## Routes / Pages

- `/` -- Home (public)
- `/auth` -- login / signup / forgot password forms
- `/profile` -- user profile (protected)
- 404 via NotFound component

## API routes

- `POST /auth/signup|login|verify-email|verify-otp|reset-password` -- all rate limited
- `GET /users/view`, `GET /users/view/:id` -- authenticated
- `PUT /users/update/:id`, `DELETE /users/delete/:id` -- authenticated + rate limited
- `GET /token-check` -- JWT validity probe
- Full table with descriptions in [README.md](README.md)

## Auth

- JWT (7-day expiry) issued at login, verified by `server/middleware/authMiddleware.js`; passwords bcrypt-hashed
- OTP over email (nodemailer) for verification and password reset
- Required env vars: `DB_CONNECTION_STRING`, `JWT_SECRET`, `JWT_SALT_ROUNDS`, `EMAIL_ID`, `EMAIL_PASSWORD`, `CORS_ORIGINS`
