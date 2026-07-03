# MERN Stack Template

[![CI](https://github.com/Sagargupta16/mern-template/actions/workflows/ci.yml/badge.svg)](https://github.com/Sagargupta16/mern-template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org)

A full-stack web application template using the MERN stack with JWT authentication, OTP email verification, and rate limiting.

## Tech Stack

**Backend**: Express 5, Mongoose 9, JWT, bcrypt, Winston, nodemailer
**Frontend**: React 19, Vite, React Router 7, Axios, React Toastify
**Database**: MongoDB

## Features

- JWT authentication with 7-day token expiry
- OTP-based email verification and password reset
- Rate limiting on sensitive endpoints
- MVC architecture (models, controllers, routes)
- Protected routes on both frontend and backend
- Winston structured logging
- ESM modules throughout (no CommonJS)

## Quick Start

### Prerequisites

- Node.js 22+
- MongoDB (local or Atlas)

### Setup

```bash
# Install all dependencies
npm run install-all

# Copy environment config
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI, JWT secret, and email credentials

# Start both frontend and backend
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Run Individually

```bash
# Backend only
npm run server

# Frontend only
npm run client
```

## Project Structure

```
MERN-TEMPLATE/
├── client/                     # React frontend (Vite)
│   ├── src/
│   │   ├── api/                # Axios instance and API calls
│   │   ├── components/         # Reusable components
│   │   │   ├── AuthForms/      # Login, signup, forgot password
│   │   │   ├── Filter/         # Generic filter component
│   │   │   ├── Modal/          # Reusable modal (portal-based)
│   │   │   ├── NavBar/         # Navigation bar
│   │   │   ├── NotFound/       # 404 page
│   │   │   ├── Structure/      # Layout wrapper
│   │   │   └── ToastContent/   # Custom toast notifications
│   │   ├── pages/              # Route pages (Auth, Home, Profile)
│   │   ├── utils/              # Auth helpers, user data
│   │   ├── App.jsx             # Router configuration
│   │   └── main.jsx            # Entry point
│   ├── vite.config.js          # Vite config with API proxy
│   ├── eslint.config.js        # ESLint flat config
│   └── package.json
│
├── server/                     # Express backend
│   ├── controllers/            # Route handlers (auth, user)
│   ├── middleware/              # JWT auth middleware
│   ├── models/                 # Mongoose schemas (User, OTP)
│   ├── routes/                 # Route definitions
│   ├── utils/                  # Logger, rate limiter
│   ├── index.js                # Server entry point
│   ├── .env.example            # Environment template
│   └── package.json
│
└── package.json                # Root scripts (concurrently)
```

## API Endpoints

### Auth (`/auth`)

| Method | Path | Rate Limited | Description |
|--------|------|:---:|-------------|
| POST | `/auth/signup` | Yes | Register new user |
| POST | `/auth/login` | Yes | Login, returns JWT |
| POST | `/auth/verify-email` | Yes | Send OTP to email |
| POST | `/auth/verify-otp` | Yes | Verify OTP |
| POST | `/auth/reset-password` | Yes | Reset password with OTP |

### Users (`/users`) -- all authenticated

| Method | Path | Rate Limited | Description |
|--------|------|:---:|-------------|
| GET | `/users/view` | No | Get all users |
| GET | `/users/view/:id` | No | Get user by ID |
| PUT | `/users/update/:id` | Yes | Update user |
| DELETE | `/users/delete/:id` | Yes | Delete user |

### Other

| Method | Path | Description |
|--------|------|-------------|
| GET | `/token-check` | Verify JWT validity |

## Environment Variables

See `server/.env.example` for all required variables:

- `DB_CONNECTION_STRING` -- MongoDB connection URI
- `JWT_SECRET` -- Secret for signing JWTs
- `JWT_SALT_ROUNDS` -- bcrypt salt rounds (default: 10)
- `EMAIL_ID` / `EMAIL_PASSWORD` -- Email credentials for OTP
- `CORS_ORIGINS` -- Allowed frontend origins

## License

MIT License - see the [LICENSE](LICENSE) file for details.
