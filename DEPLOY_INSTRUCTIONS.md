# 🚀 Deployment Instructions - Fixed Auth for Vercel

## What Was Fixed

The 500 error was caused by using `express-session` which requires in-memory storage. **Vercel Serverless Functions are stateless** - each request runs in a new environment.

### Solution: Stateless Cookie-Based Auth

I've replaced session-based auth with **signed cookies using HMAC** that work perfectly with Vercel:

- ✅ No session storage needed
- ✅ Cryptographically signed tokens
- ✅ 24-hour expiration
- ✅ Works across all serverless invocations

## Before Deploying

### 1. Install Dependencies

Run this command to install the new `cookie-parser` package:

```bash
npm install
```

### 2. Set Environment Variables in Vercel

Go to your Vercel project dashboard and add these environment variables:

**Settings → Environment Variables**

```
AUTH_PASSWORD=your-secure-password-here
SESSION_SECRET=generate-a-random-32-char-string
```

To generate a secure SESSION_SECRET:

```bash
# On Linux/Mac:
openssl rand -base64 32

# On Windows PowerShell:
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

### 3. Deploy to Vercel

```bash
git add .
git commit -m "Fix: Replace session auth with stateless cookie auth for Vercel"
git push
```

Vercel will automatically deploy.

## How It Works Now

1. User enters password on login page
2. Server validates and creates a **signed token** with HMAC-SHA256
3. Token is sent as an HTTP-only cookie
4. Every request verifies the token signature
5. Token expires after 24 hours

## Testing Locally

```bash
# Set env vars in .env.local
AUTH_PASSWORD=test123
SESSION_SECRET=your-dev-secret-key

# Run dev server
npm run dev
```

## Files Changed

- ✅ `api/index.ts` - Replaced express-session with signed cookies
- ✅ `package.json` - Added `cookie-parser` dependency
- ✅ Frontend remains unchanged - works seamlessly

## Security Notes

- Tokens are signed with HMAC-SHA256 (tamper-proof)
- HTTP-only cookies (protected from XSS)
- Secure flag in production (HTTPS only)
- No sensitive data stored client-side
- Password never exposed in cookies

The auth system is now fully compatible with Vercel's serverless architecture! 🎉
