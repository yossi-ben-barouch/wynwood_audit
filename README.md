# Wynwood Walls Shop - Audit & Growth Strategy

A comprehensive e-commerce audit dashboard built with React, Vite, and deployed as a static site.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5000`

### Production Build

```bash
npm run build
```

Output will be in `dist/` directory.

## 📦 Project Structure

```
WynwoodAuditAI/
├── client/                    # Frontend React app
│   ├── public/               # Static assets & generated data
│   │   ├── data/            # Auto-generated JSON files
│   │   ├── media/           # Images and media
│   │   ├── _headers         # Cloudflare Pages headers
│   │   └── _redirects       # SPA routing rules
│   └── src/                 # React source code
│       ├── api/             # API query hooks
│       ├── components/      # Reusable components
│       └── pages/           # Page components
├── server/                   # Data source files
│   └── data/                # TypeScript audit data
│       ├── audit-data.ts    # Main audit data export
│       ├── executive-summary.ts
│       ├── organizational.ts
│       ├── current-state.ts
│       ├── problems.ts
│       ├── recommendations.ts
│       ├── marketing-strategy.ts
│       ├── team-reviews.ts
│       └── Audit/           # Additional audit modules
│           ├── platform-review.ts
│           └── Promotion/   # Promotion audit data
├── scripts/                  # Build scripts
│   ├── generate-static-data.ts  # Converts TS data to JSON
│   └── post-build.ts            # Post-build file copying
├── shared/                   # Shared TypeScript types
└── dist/                     # Production build output (gitignored)
```

## 🏗️ Build Process

The build happens in 3 steps:

1. **Data Generation** (`generate:data`)

   - Converts TypeScript data files to JSON
   - Outputs to `client/public/data/`

2. **Vite Build** (`vite build`)

   - Bundles React app
   - Outputs to `dist/`

3. **Post-Build** (`post-build`)
   - Copies `_headers` and `_redirects` to `dist/`

## 📊 Data Management

### Updating Audit Data

1. Edit TypeScript files in `server/data/`
2. Run `npm run generate:data` to regenerate JSON
3. Build and deploy

### Data Files Generated

- `executive-summary.json` - High-level overview
- `organizational-structure.json` - Team structure
- `current-state.json` - Current metrics
- `problems.json` - Identified issues
- `recommendations.json` - Strategic recommendations
- `marketing-strategy.json` - Marketing playbook
- `team-reviews.json` - Team assessments
- `platform-review.json` - Technical platform audit
- `promotion-audit.json` - Marketing channel audit

## 🚀 Deployment

### Cloudflare Pages (Recommended)

**Via Git Integration**:

1. Push to GitHub
2. Connect repository in Cloudflare Pages
3. Configure:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `20`

**Via Wrangler CLI**:

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name=wynwood-audit
```

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed instructions.

### Other Static Hosts

The `dist/` folder can be deployed to:

- **Netlify**: Drag & drop `dist/`
- **Vercel**: Import from Git
- **AWS S3**: Upload `dist/` contents
- **GitHub Pages**: Push `dist/` to gh-pages branch

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run check        # TypeScript type checking
npm run generate:data # Generate JSON from TypeScript data
```

## 🌐 Pages

- **Executive Dashboard** - Overview and KPIs
- **Organizational Structure** - Team breakdown
- **Current State** - Metrics and analytics
- **Critical Problems** - Identified issues
- **Strategic Recommendations** - Action plans
- **Marketing Strategy** - Marketing playbook
- **Team Reviews** - Team assessments
- **Platform Review** - Technical infrastructure audit
- **Promotion Review** - Marketing channel audit
- **E-commerce Overview** - E-commerce metrics

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - Static site conversion details

## 🔒 Security & Performance

- Security headers configured via `_headers`
- SPA routing via `_redirects`
- JSON files cached for 1 hour
- CDN-delivered static assets
- Optimized bundle size

## 🐛 Troubleshooting

### Build Issues

```bash
# Clear cache and rebuild
rm -rf node_modules dist client/public/data
npm install
npm run build
```

### Development Server Issues

```bash
# Ensure port 5000 is available
npm run dev
```

## 📄 License

MIT

---

**Built with ❤️ for The Wynwood Walls Shop**
