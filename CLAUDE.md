# CLAUDE.md - Inspire Graphics Project Context

## Project Overview
Full-stack portfolio website for Inspire Graphics design business featuring Next.js frontend and Express.js backend.

## Architecture
- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js with TypeScript, MongoDB/MySQL, Cloudinary integration
- **Structure**: Monorepo with frontend and backend workspaces

## Key Commands

### Development
```bash
# Start both frontend and backend
npm run dev

# Start individually
npm run dev:frontend  # Port 3001
npm run dev:backend

# Install all dependencies
npm run install:all
```

### Build & Quality
```bash
# Build both projects
npm run build

# Lint all code
npm run lint

# Type check
npm run type-check  # Frontend only - backend uses: cd backend && npm run type-check
```

### Backend Specific
```bash
cd backend
npm run simple      # Simple server mode
npm run test-email  # Test email functionality
```

## Important Files

### Configuration
- `package.json` - Root workspace configuration
- `frontend/package.json` - Next.js app config
- `backend/package.json` - Express API config
- `backend/src/config/database.ts` - Database configuration
- `frontend/next.config.js` - Next.js configuration
- `frontend/tailwind.config.ts` - Tailwind styling config

### Environment Setup
- Frontend: `.env.local` (not tracked)
- Backend: `.env` (not tracked)
- Database setup: `backend/database/scripts/`

### API & Data
- API endpoints: `backend/src/routes/`
- Data models: `backend/src/models/`
- JSON data: `backend/data/` (contacts.json, portfolio.json, testimonials.json)
- Controllers: `backend/src/controllers/`

### Frontend Components
- UI components: `frontend/src/components/ui/`
- Layout: `frontend/src/components/layout/`
- Pages: `frontend/src/app/`
- Utilities: `frontend/src/utils/`

## Database
- Schema documentation: `backend/database/DATABASE_SCHEMA.md`
- Migration scripts: `backend/database/migrations/`
- Seed data: `backend/database/seeds/`

## Development Workflow
1. Use `npm run dev` to start both servers
2. Frontend runs on port 3001
3. Backend API serves from Express server
4. Changes auto-reload in development
5. Run `npm run lint` and `npm run type-check` before commits

## Key Features
- Portfolio image galleries with Cloudinary
- Contact forms with email notifications
- Rate limiting and security middleware
- Responsive design with Tailwind CSS
- Type-safe APIs with Zod validation
- Error handling and logging

## Testing
- Backend: `npm run test-email` for email functionality
- API testing: `backend/test-api.sh`

## Deployment Notes
- Frontend: Optimized for Vercel deployment
- Backend: Ready for Railway/Heroku deployment
- Environment variables required for production

## Common Issues
- Ensure database is set up before starting backend
- Check environment variables if services fail
- Use correct ports (frontend: 3001, backend: varies)