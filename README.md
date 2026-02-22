# MERN Stack Template

A production-ready MERN stack template with JWT authentication, email OTP verification, rate limiting, and structured logging -- designed as a reusable starting point for new projects.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## Overview

A clean, well-structured MERN (MongoDB, Express, React, Node.js) template with authentication, security best practices, and modern tooling already configured. Fork this template to start building full-stack applications without boilerplate setup.

## What's Included

### Frontend
- React with Vite 7 (fast HMR)
- Tailwind CSS 4 for styling
- React Router 7 for navigation
- Axios with configured interceptors
- Toast notifications
- Auth forms (login/signup)
- Profile page template
- Protected route pattern

### Backend
- Express with MVC architecture
- JWT authentication with secure token handling
- Email OTP verification
- bcrypt password hashing
- Rate limiting per endpoint
- Helmet security headers
- Winston structured logging
- MongoDB with Mongoose ODM

## Project Structure

```
MERN-TEMPLATE/
├── client/                      # React frontend (Vite)
│   ├── src/
│   │   ├── api/                # API layer
│   │   │   ├── authApi.jsx     # Auth endpoints
│   │   │   ├── userApi.jsx     # User endpoints
│   │   │   ├── axiosInstance.jsx # Configured Axios
│   │   │   └── tokenCheckApi.jsx # Token validation
│   │   ├── components/
│   │   │   ├── AuthForms/      # Login/Signup forms
│   │   │   ├── Filter/         # Search/filter
│   │   │   ├── Modal/          # Reusable modals
│   │   │   ├── NavBar/         # Navigation
│   │   │   ├── NotFound/       # 404 page
│   │   │   └── ToastContent/   # Notifications
│   │   ├── pages/
│   │   │   ├── Auth/           # Auth page
│   │   │   ├── Home/           # Home page
│   │   │   └── Profile/        # User profile
│   │   └── utils/              # Helper functions
│   └── package.json
├── server/                      # Express backend
│   ├── controllers/
│   │   ├── authController.js   # Auth logic
│   │   └── userController.js   # User logic
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT verification
│   ├── models/
│   │   ├── User.js             # User schema
│   │   └── Otp.js              # OTP schema
│   ├── routes/
│   │   ├── authRoutes.js       # Auth endpoints
│   │   └── userRoutes.js       # User endpoints
│   ├── utils/
│   │   ├── limiter.js          # Rate limiting
│   │   └── logger.js           # Winston logging
│   └── package.json
├── Procfile                     # Production deployment
├── SECURITY.md
└── package.json                 # Root scripts
```

## Getting Started

### Prerequisites

- Node.js 20+
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/Sagargupta16/MERN-TEMPLATE.git
cd MERN-TEMPLATE

# Install all dependencies (root + client + server)
npm run fb-install
```

### Environment Variables

Create `.env` in the `server/` directory:

```env
MONGODB_URI=mongodb://localhost:27017/your-app
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Running

```bash
# Start both frontend and backend
npm run dev

# Frontend only
npm run frontend-start

# Backend only
npm run backend-start
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |

## Security Features

- JWT tokens with secure handling
- bcrypt password hashing (10 salt rounds)
- Rate limiting on auth endpoints
- Helmet security headers
- CORS configuration
- Input validation
- OTP email verification

## How to Use This Template

1. Fork or clone this repository
2. Update `package.json` with your project name
3. Configure environment variables
4. Modify the User model to fit your schema
5. Add your routes, controllers, and pages
6. Deploy (Procfile included for Heroku/Render)

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both servers concurrently |
| `npm run frontend-start` | Start Vite dev server |
| `npm run backend-start` | Start Express server |
| `npm run fb-install` | Install all dependencies |
| `npm run format` | Format code with Prettier |

## License

MIT
