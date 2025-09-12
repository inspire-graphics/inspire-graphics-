# Development Server Guide

## Quick Start

The Inspire Graphics frontend development server is configured to run on port 3001 by default to avoid conflicts.

### Starting the Server

```bash
# Start on port 3001 (recommended)
npm run dev

# Or start on port 3000 if available
npm run dev:3000
```

### Accessing the Application

- **Primary URL:** http://localhost:3001
- **Alternative URL:** http://localhost:3000 (if using dev:3000)

### Common Issues & Solutions

#### 1. "This site can't be reached" / Connection Refused

**Solution:**
```bash
# Kill any existing processes
pkill -f "next dev"

# Restart the development server
npm run dev
```

#### 2. Port Already in Use

**Solution:**
```bash
# Check what's using the port
lsof -i :3001

# Use alternative port
npm run dev:3000
```

#### 3. Build Issues

**Solution:**
```bash
# Clean build and restart
rm -rf .next
npm run build
npm run dev
```

#### 4. Dependency Issues

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Server Status Check

To verify the server is running correctly:

```bash
# Check if server responds
curl -I http://localhost:3001

# Should return HTTP/1.1 200 OK
```

### Environment Variables

The development server uses these environment variables from `.env.local`:

- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:5000/api)
- `NEXT_PUBLIC_SITE_URL` - Frontend URL (default: http://localhost:3001)

### Features Available

- ✅ Hot Module Replacement (HMR)
- ✅ TypeScript support
- ✅ Tailwind CSS compilation
- ✅ Error boundary integration
- ✅ API proxy to backend
- ✅ Image optimization
- ✅ Font optimization

### Performance

The server typically starts in under 2 seconds and supports:
- Fast refresh for React components
- Automatic TypeScript compilation
- Live CSS updates
- Error overlay in development

## Troubleshooting

If you encounter any issues:

1. Check the terminal for error messages
2. Verify all dependencies are installed (`npm list`)
3. Ensure ports 3000/3001 are available
4. Check browser console for client-side errors
5. Verify environment variables in `.env.local`

## Production Build

To test a production build locally:

```bash
npm run build
npm run start
```

This will build and serve the application in production mode on port 3001.