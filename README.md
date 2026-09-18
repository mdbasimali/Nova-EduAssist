<div align="center">

# 🎓 NOVA EduAssist
### AI-Powered Learning & Assessment Framework
**Official Submission for the Goa Hackathon**

[![Frontend Build](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-forestgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![AI Providers](https://img.shields.io/badge/AI%20Engine-Gemini%203.6%20Flash%20%2B%20Groq%20120B-purple?style=for-the-badge&logo=google)](https://ai.google.dev/)

<p align="center">
  A state-of-the-art educational evaluation and mastery acceleration platform designed to transition modern education from rote memorization into verifiable, multi-dimensional competency mastery.
</p>

---

</div>

## 📌 Problem Statement & Solution

Traditional educational assessments suffer from static question banks, predictable answers, and lack of real-world alignment. **NOVA EduAssist** solves this by combining **adaptive generative AI** with a **Tri-Dimensional Mastery Framework** calibrated across 20+ international curriculum benchmarks (such as Finland's learner-centered model, Singapore's SkillsFuture, and South Korea's rigorous analytical focus).

---

## 🌟 Key Pillars & Capabilities

### 1. 📊 Tri-Dimensional Mastery Framework
Measures real learning across 4 weighted pedagogical dimensions:
- **Foundational Knowledge (40%)**: Core concepts, definitions, and essential theorems.
- **Applied Problem-Solving (30%)**: Practical scenarios, numerical modeling, and real-world synthesis.
- **Collaborative Competence (20%)**: Team problem-solving dynamics, peer review, and communication.
- **Reflective Metacognition (10%)**: Self-assessment, cognitive bias awareness, and learning reflection.

### 2. ⚡ Resilient Dual-Provider AI Architecture
- **Primary AI Engine**: **Google Gemini 3.6 Flash** for fast, pedagogically sound, and JSON-structured question generation with age calibration and verified academic references.
- **Automated Failover Engine**: **Groq (`openai/gpt-oss-120b`)** provides high-throughput, low-latency failover during API demand spikes (503s/429s), guaranteeing zero downtime during active exams.
- **Semantic Evaluation Engine**: Natural language understanding compares student free-text short answers against conceptual rubrics rather than strict string matching.

### 3. 🎯 Skill Enhance Diagnostic Workspace
- Generates randomized micro-assessments on demand.
- Provides immediate automated scoring and in-depth analytical performance breakdown.
- AI-compiled learning summaries highlight specific cognitive weaknesses and recommend targeted study resources from authoritative sources (NASA, MIT, Khan Academy).

### 4. 🔒 Enterprise Privacy & Explicit Consent Framework
- Implements active user consent tracking for AI personalization.
- Enforces granular consent statuses (`granted`, `declined`, `withdrawn`, `expired`).
- Automatic conflict detection blocks personalization routines when in conflict with user preferences.

---

## 🏗️ Project Architecture

```
Hacker_house/
├── backend/                         # Express.js REST API & AI Engine
│   ├── config/                      # Database & Environment configuration
│   ├── controllers/                 # Route controllers (Auth, Assessment, SkillEnhance)
│   ├── middleware/                  # JWT auth, CORS, error handling, input validation
│   ├── models/                      # Mongoose data schemas (User, Assessment, Consent)
│   ├── routes/                      # API endpoint definitions
│   ├── services/                    # AI orchestration, email, and assessment logic
│   ├── tests/                       # Modular test & diagnostic verification scripts
│   ├── package.json
│   └── server.js
│
├── frontend/                        # React 19 Client Web Application
│   ├── public/                      # Static assets (Favicons, official logo)
│   ├── src/
│   │   ├── components/              # Reusable UI, dashboard, and assessment modules
│   │   ├── context/                 # Application-wide state (AssessmentContext)
│   │   ├── data/                    # Educational standard datasets
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── pages/                   # Login, OTP, Profile Setup, Dashboard, Legal
│   │   ├── routes/                  # Guarded React Router v7 navigation
│   │   ├── services/                # Axios API service integrations
│   │   └── utils/                   # Score calculations, consent validation
│   └── package.json
│
├── .gitignore                       # Clean monorepo ignore rules
└── README.md                        # Master project documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** v18 or newer
- **npm** or **yarn**
- **MongoDB** (Atlas connection URI or local instance)
- **API Keys**: Google Gemini API key and/or Groq API key

---

### 1. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
```

Open `.env` and fill in your connection strings and API keys:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.6-flash
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-120b
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

Run the backend development server:
```bash
npm run dev
```
*The server will start on `http://localhost:5000` and automatically connect to MongoDB.*

---

### 2. Frontend Setup

```bash
# Open a new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
```

Configure `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

Run the frontend development server:
```bash
npm run dev
```
*Access the application in your browser at `http://localhost:5173`.*

---

## 🧪 Verification & Testing

The backend includes test scripts to verify the core subsystems:

```bash
cd backend

# Run soft-delete and mastery score verification
npm test

# Verify AI assessment generation across subjects
npm run test:assessment

# Verify AI diagnostic report generation
npm run test:report

# Verify skill enhance question generation
npm run test:skill
```

To verify production frontend build:
```bash
cd frontend
npm run build
```

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status check |
| `POST` | `/api/auth/google-login` | Authenticate via Google OAuth token |
| `POST` | `/api/auth/send-otp` | Request email verification OTP |
| `POST` | `/api/auth/verify-otp` | Verify OTP code and issue JWT |
| `PUT` | `/api/auth/profile` | Update student profile and educational context |
| `POST` | `/api/questions/generate` | AI-generate calibrated assessment questions |
| `POST` | `/api/assessments` | Submit and record assessment results |
| `GET` | `/api/assessments/my-mastery` | Retrieve cumulative 4-dimensional mastery score |
| `GET` | `/api/assessments/my-assessments` | Retrieve student assessment history |
| `DELETE`| `/api/assessments/:id` | Soft-delete assessment record |
| `POST` | `/api/skill-enhance/generate` | Generate randomized Skill Enhance challenge |
| `POST` | `/api/skill-enhance/report` | Generate deep AI diagnostic report |
| `GET` | `/api/consent/status` | Fetch current personalization consent state |
| `POST` | `/api/consent/record` | Record user consent choice (Grant / Decline / Withdraw) |

---

## 🛡️ Security & Privacy Compliance

- **No Secrets in Source**: All API keys, database credentials, and secrets are strictly loaded via `.env` and kept untracked.
- **Authentication**: JWT with configurable expiry, bcrypt password hashing, and Google OAuth 2.0 token verification.
- **Request Protection**: Rate limiting on sensitive endpoints, Helmet HTTP security headers, and strict origin CORS whitelisting.
- **Data Integrity**: Soft-deletion architecture ensures students can manage history visibility without corrupting longitudinal analytics.

---

<div align="center">
  <sub>Developed with passion for the <strong>Goa Hackathon</strong>. Built for resilient, next-generation learning.</sub>
</div>
