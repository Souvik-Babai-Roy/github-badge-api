# GitHub Trophy Badge API v2.0 - Deployment & Setup Guide

## Professional Grade - Production Ready

This guide covers everything needed to deploy the professional GitHub Trophy Badge API.

---

## 📋 Pre-requisites

- **Node.js**: v14+ (v16+ recommended)
- **npm**: v6+
- **GitHub Personal Access Token** (optional but recommended)
- **Environment**: Linux, macOS, or Windows

---

## 🚀 Installation

### 1. Clone & Setup

```bash
git clone https://github.com/YOUR_USERNAME/github-badge-api.git
cd github-badge-api
npm install
```

### 2. Environment Configuration

Create `.env` file in root directory:

```env
# Server Configuration
NODE_ENV=production
PORT=3000

# GitHub API
GITHUB_TOKEN=ghp_your_personal_access_token_here
GITHUB_API_BASE=https://api.github.com

# Caching
CACHE_TTL=300

# Rate Limiting
RATE_LIMIT_WINDOW=60000
RATE_LIMIT_MAX=100

# Logging
LOG_LEVEL=info
```

#### Getting GitHub Personal Access Token:

1. Go to: https://github.com/settings/tokens/new
2. Select scopes: `public_repo`, `read:user`
3. Generate token and copy
4. Add to `.env` as `GITHUB_TOKEN`

### 3. Run Locally

```bash
npm run dev
```

Server starts at: `http://localhost:3000`

Test endpoint:
```bash
curl "http://localhost:3000/api/trophy?username=octocat"
```

---

## 🏗️ Project Structure

```
github-badge-api/
├── src/
│   ├── builders/                    # SVG generation
│   │   ├── advanced-trophy-builder.js   # Professional trophy builder
│   │   ├── badge.js                # Badge component
│   │   ├── card.js                 # Card component
│   │   └── layout.js               # Layout system
│   ├── config/
│   │   └── index.js                # Configuration management
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── services/
│   │   └── github.js               # GitHub API integration
│   ├── systems/                    # Professional systems
│   │   ├── animations.js           # 10+ animation effects
│   │   ├── filters.js              # Trophy filtering
│   │   ├── presets.js              # 9 configuration presets
│   │   └── validators.js           # Parameter validation
│   ├── themes/
│   │   ├── index.js
│   │   └── themes.json             # 11 color themes
│   ├── types/
│   │   └── trophy.js               # 14 trophy type system
│   ├── utils/
│   │   ├── logger.js
│   │   └── rank.js
│   ├── app.js                      # Express application
│   └── server.js                   # Entry point
├── PROFESSIONAL_GUIDE.md           # Feature documentation
├── API_REFERENCE.md                # API specifications
├── package.json
└── .env
```

---

## 🎯 Key Features

### Trophy System (14 Types)
- Repositories, Followers, Stars, Contributions
- GitHub Pro, Collaboration, Streak
- Open Source, Issues, Code Review, Documentation
- Polyglot Developer, Innovation

### Medal & Tier System
- **4 Medal Levels**: Bronze, Silver, Gold, Platinum
- **Dynamic Thresholds**: Based on achievement values
- **Professional Styling**: Color-coded visual representation

### Animation Effects (11 Types)
- None, Shimmer, Pulse, Glow, Wave
- Bounce, Float, Rotate, Rainbow, Flip, Gradient Shift

### Color Themes (11 Options)
- Gotham, Dracula, Neon, Light, Nord
- Solarized, Monokai, GitHub Dark
- Cyberpunk, Gruvbox, Tokyo Night

### Configuration Presets (9 Types)
- Minimalist, Balanced, Comprehensive
- Professional, Expert, Showcase
- Compact, Developer-Focus, Social-Focus

### Advanced Filtering
- Filter by medals, tiers, categories
- Select specific trophies
- Sort by name, category, or threshold

---

## 🚢 Production Deployment

### Option 1: Render (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Professional Trophy API v2.0"
   git push origin main
   ```

2. **Create Render Service**
   - Go to https://render.com
   - Connect GitHub repository
   - Select "Node" environment
   - Build command: `npm install`
   - Start command: `npm start`

3. **Set Environment Variables**
   - Add `GITHUB_TOKEN` in Render dashboard
   - Set `NODE_ENV=production`

4. **Deploy**
   - Render auto-deploys on push

### Option 2: Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-trophy-api

# Set environment variables
heroku config:set GITHUB_TOKEN=your_token

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Option 3: Docker

**Dockerfile:**
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

**Build & Run:**
```bash
docker build -t github-trophy-api .
docker run -p 3000:3000 -e GITHUB_TOKEN=your_token github-trophy-api
```

### Option 4: Self-Hosted (VPS)

```bash
# SSH into server
ssh user@your-server.com

# Clone repository
git clone https://github.com/YOUR_USERNAME/github-badge-api.git
cd github-badge-api

# Install dependencies
npm install

# Create .env
nano .env

# Install PM2 (process manager)
npm install -g pm2

# Start service
pm2 start src/server.js --name trophy-api

# Setup auto-start
pm2 startup
pm2 save
```

---

## 🔧 Configuration Options

### Environment Variables

```env
# Server
PORT=3000
NODE_ENV=production

# GitHub API
GITHUB_TOKEN=ghp_xxxxx          # Personal access token
GITHUB_API_BASE=https://api.github.com

# Caching (seconds)
CACHE_TTL=300                   # 5 minutes

# Rate Limiting
RATE_LIMIT_WINDOW=60000         # 1 minute
RATE_LIMIT_MAX=100              # 100 requests/min

# Logging
LOG_LEVEL=info                  # debug, info, warn, error
```

### Dynamic Thresholds

Edit `src/types/trophy.js` to customize trophy achievement thresholds:

```javascript
const TROPHY_TYPES = {
  repositories: {
    tiers: {
      bronze: { threshold: 5 },     // Customize these
      silver: { threshold: 20 },
      gold: { threshold: 50 },
      platinum: { threshold: 100 }
    }
  }
};
```

---

## 🧪 Testing

### Manual Testing

```bash
# Basic test
curl "http://localhost:3000/api/trophy?username=octocat"

# With specific options
curl "http://localhost:3000/api/trophy?username=octocat&medals=gold&animation=glow"

# Check health
curl "http://localhost:3000/health"

# Get documentation
curl "http://localhost:3000/api/docs"
```

### Automated Testing

```bash
# Add to package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}

npm install --save-dev jest

# Create tests/api.test.js
```

---

## 📊 Monitoring

### View Logs

**Development:**
```bash
npm run dev
```

**Production (PM2):**
```bash
pm2 logs trophy-api
pm2 status
```

### Performance Metrics

Monitor:
- Response time (goal: <500ms)
- Cache hit ratio (goal: >70%)
- Error rate (goal: <1%)
- Rate limit violations

---

## 🔐 Security

### Best Practices

1. **Never commit `.env`** - Add to `.gitignore`
2. **Use HTTPS** - Always in production
3. **Rate limiting** - Enabled by default (100 req/min)
4. **Input validation** - All parameters sanitized
5. **Helmet headers** - Security headers configured
6. **CORS** - Enabled for cross-origin requests

### Rate Limiting

Default configuration:
```javascript
{
  windowMs: 60000,      // 1 minute
  max: 100              // 100 requests per window
}
```

Customize in `src/config/index.js`

---

## 🚨 Troubleshooting

### Issue: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "GitHub API rate limit exceeded"
- Add personal access token to `.env`
- Increase `CACHE_TTL` in `.env`

### Issue: "Port already in use"
```bash
# Use different port
PORT=3001 npm start
```

### Issue: "SVG rendering error"
- Check GitHub API response
- Verify theme colors are valid
- Ensure username is valid

---

## 📈 Scaling

### For High Traffic

1. **Use CDN** - Cache SVG responses
2. **Database Caching** - Redis for distributed cache
3. **Load Balancing** - Multiple instances
4. **Async Processing** - Queue SVG generation

### Redis Caching Example

```javascript
const redis = require('redis');
const client = redis.createClient();

async function getWithCache(key) {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);
  
  const data = await fetchFromGitHub();
  await client.setex(key, 300, JSON.stringify(data));
  return data;
}
```

---

## 📝 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/trophy` | GET | Generate trophy badges |
| `/api/presets` | GET | List presets |
| `/api/validation` | GET | Get validation info |
| `/api/docs` | GET | API documentation |
| `/health` | GET | Health check |

---

## 🎨 Customization

### Add Custom Theme

Edit `src/themes/themes.json`:

```json
{
  "custom": {
    "bg1": "#1a1a1a",
    "bg2": "#2a2a2a",
    "textPrimary": "#ffffff",
    "textSecondary": "#cccccc",
    "accent1": "#ff6b6b",
    "accent2": "#4ecdc4",
    "gold": "#ffd700",
    "silver": "#c0c0c0",
    "bronze": "#cd7f32",
    "name": "Custom Theme"
  }
}
```

### Add Custom Preset

Edit `src/systems/presets.js`:

```javascript
custom: {
  id: 'custom',
  name: 'My Custom Preset',
  description: 'My custom configuration',
  config: {
    layout: 'grid',
    columns: 3,
    animation: 'glow',
    // ... more options
  }
}
```

---

## 📚 Documentation Files

- **README.md** - Project overview
- **PROFESSIONAL_GUIDE.md** - Feature documentation
- **API_REFERENCE.md** - API specifications
- **DEPLOYMENT.md** - Deployment guide (this file)

---

## 🐛 Support & Issues

### Getting Help

1. Check documentation files
2. Review example URLs in guides
3. Test with `/api/validation` endpoint
4. Check server logs

### Reporting Bugs

Include:
- API endpoint used
- Parameters passed
- Expected vs actual result
- Error message
- GitHub username tested

---

## 📄 License

MIT License - See LICENSE file

---

## 🎉 Success!

Your professional Trophy Badge API is ready for production! 

**Next Steps:**
1. Deploy to your preferred platform
2. Share with your community
3. Customize themes and presets
4. Monitor performance
5. Gather feedback and iterate

