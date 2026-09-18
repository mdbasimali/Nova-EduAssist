import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import questionRoutes from './routes/questionRoutes.js';
import assessmentRoutes from './routes/assessmentRoutes.js';
import authRoutes from './routes/authRoutes.js';
import skillEnhanceRoutes from './routes/skillEnhanceRoutes.js';
import consentRoutes from './routes/consentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// --- CORS Configuration ---
// Security flow: Frontend (Vercel) -> VITE_API_URL -> Render Backend -> FRONTEND_URL -> CORS Security
// Local development origins are always permitted for local development
const localOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
];

const allowedOrigins = [...localOrigins];

// Helper to sanitize and register an origin (strips whitespace and trailing slashes)
const registerOrigin = (rawUrl) => {
  if (!rawUrl) return;
  const cleanUrl = rawUrl.trim().replace(/\/+$/, '');
  if (cleanUrl && !allowedOrigins.includes(cleanUrl)) {
    allowedOrigins.push(cleanUrl);
  }
};

// In production, allow the deployed Frontend domain via FRONTEND_URL (supports CLIENT_URL as alias)
const productionFrontend = process.env.FRONTEND_URL || process.env.CLIENT_URL;
if (productionFrontend) {
  productionFrontend.split(',').forEach(registerOrigin);
} else {
  // Fallback defaults if FRONTEND_URL is not yet configured
  registerOrigin('https://nova-eduassist.vercel.app');
  registerOrigin('https://frontend-9wcz23ofr-mdbasimalis-projects.vercel.app');
}

console.log('[CORS] Allowed origins:', allowedOrigins);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (e.g. server-to-server health checks, curl)
    if (!origin) return callback(null, true);

    const cleanOrigin = origin.trim().replace(/\/+$/, '');
    if (allowedOrigins.includes(cleanOrigin)) {
      return callback(null, true);
    }

    console.warn(`[CORS] Blocked unauthorized request from origin: ${origin}`);
    return callback(new Error(`CORS: Origin '${origin}' is not allowed`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 204,
};

// Security Middlewares
app.use(helmet());
app.use(cors(corsOptions));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    service: 'Nova EduAssist API',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/questions', questionRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/skill-enhance', skillEnhanceRoutes);
app.use('/api/consent', consentRoutes);

// Catch-all route not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    errors: [{ message: `Cannot ${req.method} ${req.originalUrl}` }]
  });
});

// Global Error Handler
app.use(errorHandler);

export default app;
