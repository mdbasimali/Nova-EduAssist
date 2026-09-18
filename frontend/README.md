# Nova EduAssist - Frontend Application

Modern, responsive client portal for the **Nova EduAssist** AI-Powered Learning & Assessment Platform. Built with React 19, Vite, Tailwind CSS, and Framer Motion.

---

## Key Features

- **Tri-Dimensional Mastery Dashboard**: Interactive circular visualization mapping Foundational (40%), Applied (30%), Collaborative (20%), and Reflective (10%) competencies.
- **Adaptive AI Assessment Generator**: Generates concept-specific assessments calibrated by subject, age group, global educational context, Bloom's taxonomy level, and question type.
- **Skill Enhance Workspace**: Real-time randomized testing, instant scoring, semantic short-answer evaluation, and deep AI diagnostic reports.
- **Privacy & Explicit Consent Management**: Complete GDPR/educational data compliance panel with real-time conflict detection and consent expiry handling.
- **Modern Adaptive UI**: Responsive glassmorphism aesthetic with full dark/light mode toggle.

---

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS, Vanilla CSS custom variables, Lucide React icons
- **State Management & Context**: React Context API (`AssessmentContext`) + Custom Hooks
- **Animation & Visuals**: Framer Motion, Canvas Confetti
- **Routing**: React Router v7 with session restoration guards

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
```

Configure your `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```
