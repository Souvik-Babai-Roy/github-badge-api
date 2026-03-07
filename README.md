# 🏆 GitHub Trophy Badge API v2.0

### Professional Grade - Production Ready

<div align="center">

**Professional GitHub Trophy Badge Generator with Advanced Customization**

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?style=flat-square)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-v4.18+-blue?style=flat-square)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)]()

**[📖 Professional Guide](PROFESSIONAL_GUIDE.md) • [🔌 API Reference](API_REFERENCE.md) • [🚀 Deploy Guide](DEPLOYMENT.md)**

</div>

---

## ✨ What's New in v2.0

### Professional Trophy System
- 🏅 **14 Trophy Types** - Repositories, Followers, Stars, Contributions, Open Source, Code Review, Documentation, and more
- 🎖️ **Medal & Tier System** - Bronze, Silver, Gold, Platinum with dynamic thresholds
- 🎯 **Advanced Filtering** - Filter by medals, tiers, categories, or specific trophies
- 🔧 **Full Customization** - Control every aspect of display

### Advanced Features
- ✨ **11 Animation Effects** - Shimmer, Pulse, Glow, Wave, Bounce, Float, Rotate, Rainbow, and more
- 🎨 **11 Premium Themes** - Professional color palettes for every style
- 🎯 **9 Configuration Presets** - Minimalist, Balanced, Professional, Expert, and more
- 📊 **Comprehensive Filtering** - By medals, categories, tiers, or specific trophies

### Professional Architecture
- 🏗️ **Modular Design** - Separated concerns for maintainability
- ⚡ **Performance Optimized** - Caching, compression, efficient SVG generation
- 🔐 **Enterprise Security** - Rate limiting, input validation, secure headers
- 📈 **Scalable Foundation** - Ready for high-traffic production use

---

## 🎯 Key Features

### Trophy System (14 Types)
| Trophy | Categories | Medals |
|--------|-----------|--------|
| Repository Master | Contribution | Bronze/Silver/Gold/Platinum |
| Community Leader | Influence | Bronze/Silver/Gold/Platinum |
| Star Collector | Popularity | Bronze/Silver/Gold/Platinum |
| Contribution Champion | Activity | Bronze/Silver/Gold/Platinum |
| Code Review Expert | Quality | Bronze/Silver/Gold/Platinum |
| Open Source Champion | Community | Bronze/Silver/Gold/Platinum |
| + 8 more trophies | + Multiple categories | + Dynamic thresholds |

### Display Modes
- **Dashboard** - Grid layout of trophy cards (default)
- **Wall** - Showcase grid of trophy badges
- **Individual** - Single trophy card
- **Showcase** - Featured display of top trophies
- **Compact** - Space-efficient layout

### Animation Effects
```
none, shimmer, pulse, glow, wave, bounce, float, rotate, gradientShift, flip, rainbow
```

### Color Themes
```
gotham, dracula, neon, light, nord, solarized, monokai, github-dark, cyberpunk, gruvbox, tokyonight
```

### Configuration Presets
```
minimalist, balanced, comprehensive, professional, expert, showcase, compact, devfocus, socialfocus
```

---

## 🚀 Quick Start

## 🚀 Quick Start

### Live Example

```markdown
[![GitHub Trophies](https://github-badge-api.example.com/api/trophy?username=octocat&preset=professional)](https://github.com/octocat)
```

### Basic Usage

```
GET https://api.example.com/api/trophy?username=octocat
```

### With Presets

```
https://api.example.com/api/trophy?username=octocat&preset=professional
https://api.example.com/api/trophy?username=octocat&preset=expert&theme=cyberpunk
https://api.example.com/api/trophy?username=octocat&preset=devfocus&animation=glow
```

### Advanced Filtering

```
# Gold medals only
?username=octocat&medals=gold&theme=cyberpunk

# Developer-focused metrics
?username=octocat&categories=contribution,activity&animation=pulse

# Custom dimensions
?username=octocat&cardWidth=350&cardHeight=200&spacing=25
```

---

## 📖 Documentation

- **[Professional Guide](PROFESSIONAL_GUIDE.md)** - Complete feature documentation
- **[API Reference](API_REFERENCE.md)** - Detailed API specifications
- **[Deployment Guide](DEPLOYMENT.md)** - Production deployment instructions

---

## 🏗️ Project Architecture

Professional modular architecture designed for scalability and maintainability:

```
src/
├── builders/
│   ├── advanced-trophy-builder.js  # Professional trophy card/badge generation
│   ├── badge.js                    # Badge component system
│   ├── card.js                     # Card component system
│   └── layout.js                   # Layout orchestration
├── systems/
│   ├── animations.js               # 11 animation effects
│   ├── filters.js                  # Trophy filtering & sorting
│   ├── presets.js                  # 9 configuration presets
│   └── validators.js               # Parameter validation
├── types/
│   └── trophy.js                   # 14 trophy type definitions
├── services/
│   └── github.js                   # GitHub API integration
├── themes/
│   ├── index.js
│   └── themes.json                 # 11 color themes
├── middleware/
│   ├── errorHandler.js
│   └── rateLimiter.js
├── config/
│   └── index.js                    # Configuration management
├── utils/
│   ├── logger.js
│   └── rank.js
├── app.js                          # Express router
└── server.js                       # Entry point
```

---

## 💻 Installation & Setup

### Local Development

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/github-badge-api.git
cd github-badge-api

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
PORT=3000
NODE_ENV=development
GITHUB_TOKEN=your_token_here
CACHE_TTL=300
LOG_LEVEL=info
EOF

# Start development server
npm run dev
```

**Access at:** `http://localhost:3000`

### Test Endpoint

```bash
curl "http://localhost:3000/api/trophy?username=octocat"
```

---

## 🎯 Usage Examples

### Example 1: Professional Showcase
```markdown
![GitHub Trophies](https://api.example.com/api/trophy?username=octocat&preset=professional&theme=gotham)
```

### Example 2: Developer Metrics
```markdown
![Dev Stats](https://api.example.com/api/trophy?username=octocat&preset=devfocus&animation=pulse)
```

### Example 3: Minimal Display
```markdown
![Trophies](https://api.example.com/api/trophy?username=octocat&preset=minimalist&theme=light&animation=none)
```

### Example 4: Expert View
```markdown
![All Trophies](https://api.example.com/api/trophy?username=octocat&preset=expert&theme=cyberpunk)
```

### Example 5: Custom Filters
```markdown
![Gold Medals](https://api.example.com/api/trophy?username=octocat&medals=gold,platinum&animation=glow)
```

---

## 🎨 Customization Options

### Presets (Quick Start)
| Preset | Best For | Medals | Animation |
|--------|----------|--------|-----------|
| minimalist | Clean profiles | Gold/Platinum | Shimmer |
| balanced | General use | All | Shimmer |
| professional | Business | Silver/Gold/Platinum | Glow |
| expert | Detailed view | All | Bounce |
| devfocus | Developers | Gold/Platinum | Float |
| socialfocus | Community | Gold/Platinum | Rainbow |

### Themes
All themes are carefully designed to provide professional aesthetics:

- **Gotham** - Dark, sophisticated (default)
- **Dracula** - Deep purple, vibrant
- **Cyberpunk** - Futuristic neon
- **Nord** - Arctic, professional
- **Tokyo Night** - Modern, elegant
- ...and 6 more professional themes

### Animations
- `none` - Static (fastest)
- `shimmer` - Glossy shine
- `pulse` - Gentle pulsing
- `glow` - Radiant effect
- `wave` - Subtle distortion
- `bounce` - Energetic scaling
- `float` - Smooth floating
- `rotate` - Continuous rotation
- `rainbow` - Vibrant colors
- `flip` - 3D effect
- `gradientShift` - Color animation

---

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/trophy` | GET | Generate trophy badges |
| `/api/presets` | GET | List available presets |
| `/api/validation` | GET | Parameter validation info |
| `/api/docs` | GET | API documentation |
| `/health` | GET | Health check |

---

## 🚀 Deployment

### Render (Recommended)
```bash
git push origin main
# Auto-deploys via Render webhook
```

### Docker
```bash
docker build -t trophy-api .
docker run -p 3000:3000 -e GITHUB_TOKEN=xxx trophy-api
```

### Heroku
```bash
heroku create your-app
heroku config:set GITHUB_TOKEN=your_token
git push heroku main
```

### VPS/Self-Hosted
```bash
pm2 start src/server.js --name trophy-api
pm2 startup && pm2 save
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## ⚙️ Configuration

### Environment Variables

```env
# Server
PORT=3000
NODE_ENV=production

# GitHub API
GITHUB_TOKEN=your_personal_access_token
GITHUB_API_BASE=https://api.github.com

# Caching
CACHE_TTL=300              # 5 minutes

# Rate Limiting
RATE_LIMIT_WINDOW=60000    # 1 minute
RATE_LIMIT_MAX=100         # 100 requests/min

# Logging
LOG_LEVEL=info
```

### Getting GitHub Token

1. Go to https://github.com/settings/tokens/new
2. Select scopes: `public_repo`, `read:user`
3. Generate and copy token
4. Add to `.env`

---

## 📊 Performance

- **Response Time**: < 500ms (cached)
- **Cache Duration**: 5 minutes per user
- **Rate Limit**: 100 req/min per IP
- **Compression**: gzip enabled
- **Security**: Helmet headers enabled

---

## 🔐 Security Features

- ✅ Parameter validation & sanitization
- ✅ Rate limiting (100 req/min)
- ✅ Helmet security headers
- ✅ CORS configured
- ✅ Input/output validation
- ✅ Error handling without leaks

---

## 🛠️ Development

### Scripts

```bash
npm run dev      # Start development server
npm start        # Start production server
npm test         # Run tests (if added)
npm lint         # Lint code (if added)
```

### Project Structure

- **`src/types/`** - Trophy definitions and types
- **`src/systems/`** - Filters, animations, validators, presets
- **`src/builders/`** - SVG generation components
- **`src/services/`** - GitHub API integration
- **`src/themes/`** - Color theme definitions
- **`src/middleware/`** - Express middleware
- **`src/utils/`** - Utility functions

---

## 🤝 Contributing

Contributions welcome! Areas to improve:

- [ ] Add more trophy types
- [ ] Create additional themes
- [ ] Optimize SVG generation
- [ ] Add test suite
- [ ] Improve documentation
- [ ] Performance optimizations

---

## 📝 Recent Improvements (v2.0)

✨ **Professional v2.0 Release** - Complete redesign with:

- 🏆 Full trophy system (14 types, 4 medal levels)
- 🎨 Advanced animations (11 effects)
- 🎯 Powerful filtering system
- 📋 Configuration presets (9 types)
- 🎪 Professional architecture
- 📚 Comprehensive documentation

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file

---

## 🙏 Support

- 📖 Check [PROFESSIONAL_GUIDE.md](PROFESSIONAL_GUIDE.md)
- 🔌 See [API_REFERENCE.md](API_REFERENCE.md)
- 🚀 Visit [DEPLOYMENT.md](DEPLOYMENT.md)
- ❓ Review `/api/docs` endpoint
- ✔️ Validate with `/api/validation` endpoint

---

## 📈 Roadmap

- [ ] GraphQL support
- [ ] Custom trophy creation
- [ ] Advanced analytics
- [ ] Team mode
- [ ] API SDK (JavaScript, Python)
- [ ] Web dashboard
- [ ] Webhook support

---

<div align="center">

### Made with ❤️ for GitHub Developers

**[Report Issue](https://github.com/YOUR_USERNAME/github-badge-api/issues) • [Feature Request](https://github.com/YOUR_USERNAME/github-badge-api/issues) • [Star ⭐](https://github.com/YOUR_USERNAME/github-badge-api)**

</div>

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

---

## Getting a GitHub Token 🔐

1. Go to [GitHub Settings - Personal Access Tokens](https://github.com/settings/tokens)
2. Click **Generate new token**
3. Select these scopes:
   - `public_repo` (access public repositories)
   - `read:user` (read user profile data)
4. Copy the token and add it to your `.env` file

---

## API Usage 📡

### Endpoint

```
https://github-badge-api.onrender.com/api/trophy
```

**Or self-hosted:**
```
http://localhost:3000/api/trophy
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `username` | string | **required** | GitHub username (e.g., `octocat`) |
| `theme` | string | `gotham` | Theme name (`gotham`, `dracula`, `neon`, `light`) |
| `mode` | string | `dashboard` | Display mode (`dashboard`, `badges`, `single`) |

---

## Display Modes 🎨

### 1. Dashboard Mode (Default)
Shows a dashboard with 3 cards: Repositories, Followers, and Total Stars

**URL:**
```
https://github-badge-api.onrender.com/api/trophy?username=your-github-username
```

**Markdown:**
```markdown
![GitHub Badge](https://github-badge-api.onrender.com/api/trophy?username=your-github-username)
```

---

### 2. Badges Mode
Displays achievement badges (circular) for various milestones

**URL:**
```
https://github-badge-api.onrender.com/api/trophy?username=your-github-username&mode=badges
```

**Markdown:**
```markdown
![GitHub Badges](https://github-badge-api.onrender.com/api/trophy?username=your-github-username&mode=badges)
```

**Achievement Badges:**
- 100+ Repositories
- 100+ Total Stars
- 50+ Followers

---

### 3. Single Card Mode
Shows only a single card displaying repositories count

**URL:**
```
https://github-badge-api.onrender.com/api/trophy?username=your-github-username&mode=single
```

**Markdown:**
```markdown
![GitHub Single Card](https://github-badge-api.onrender.com/api/trophy?username=your-github-username&mode=single)
```

---

## Available Themes 🎭

The API now includes **11 premium themes**:

| Theme | Style | Use Case |
|-------|-------|----------|
| **Gotham** | Modern Blue | Professional & Modern |
| **Dracula** | Purple Dark | Developer Friendly |
| **Neon** | Fluorescent | Stand Out & Bold |
| **Light** | Clean White | Professional Docs |
| **Nord** | Arctic Blue | Calm & Cool |
| **Solarized** | Precision | Classic Developer |
| **Monokai** | Vibrant Dark | Retro Vibes |
| **GitHub Dark** | GH Native | GitHub Users |
| **Cyberpunk** | Futuristic | Bold & Modern |
| **Gruvbox** | Warm Retro | Comfortable |
| **Tokyo Night** | Japanese | Stylish & Modern |

**Usage:**
```
https://github-badge-api.onrender.com/api/trophy?username=your-username&theme=theme-name
```

---

---

## Recent Major Updates 🚀

### v3.0 - Professional Grade Design Overhaul

**Visual Redesign:**
- ✨ **Glassmorphism Effects**: Modern frosted glass card styling
- 🎨 **Enhanced Typography**: Professional font hierarchy and spacing  
- 🌈 **Gradient Backgrounds**: Multi-layered gradient system for depth
- 🎭 **10+ Premium Themes**: New cohesive theme collection (Cyberpunk, Gruvbox, Tokyo Night, etc.)
- 💎 **Professional Shadows**: Multi-layered drop shadows for 3D depth
- 🏅 **Improved Badges**: Better achievement indicators with checkmarks/locks
- 🎖️ **Enhanced Trophy Icon**: Redesigned with better proportions and shine effects

**Code Architecture:**
- ✅ **Professional Components**: Modular builders for cards, badges, and layouts
- ✅ **Better Separation**: Config, themes, services in dedicated modules
- ✅ **Extended Dimensions**: Customizable card and badge sizing
- ✅ **Trophy Wall Mode**: New premium showcase layout
- ✅ **Theme System**: Centralized theme management with 11 themes

**UX Improvements:**
- 🎯 Visual rank indicators with medal colors
- 📊 Better spacing and layout calculations  
- 🔄 Improved trophy icon scaling system
- ✨ Subtle decorative elements for polish
- 🎨 Professional accent bars and borders

### v2.0 - Initial Professional Refactor

**Code Quality:**
- ✅ Modular architecture with separated concerns
- ✅ Better code organization in dedicated folders
- ✅ Improved JSDoc documentation
- ✅ Maintainable and scalable structure

**Performance:**
- ✅ Optimized SVG rendering
- ✅ Better caching strategy  
- ✅ Reduced API calls
- ✅ Faster response times

---

## Ranking System 🏅

Each card displays a rank based on the statistic value:

| Rank | Medal | Requirement |
|------|-------|-------------|
| **S** | 🥇 Gold | 500+ |
| **A** | 🥈 Silver | 200-499 |
| **B** | 🥉 Bronze | 0-199 |

---

## Examples 📝

### 🎨 All Themes Showcase

#### Gotham (Default - Professional Blue)
![Gotham Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=gotham)

#### Dracula (Dark Purple)
![Dracula Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=dracula)

#### Neon (Vibrant Futuristic)
![Neon Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=neon)

#### Light (Clean Professional)
![Light Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=light)

#### Nord (Arctic Blue)
![Nord Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=nord)

#### Monokai (Vibrant Dark)
![Monokai Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=monokai)

#### Cyberpunk (Futuristic Neon)
![Cyberpunk Theme](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&theme=cyberpunk)

---

### 📊 Display Modes

#### Dashboard Mode (All Stats)
![Dashboard Mode](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&mode=dashboard&theme=gotham)

#### Achievement Badges (Circular Medals)
![Badges Mode](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&mode=badges&theme=dracula)

#### Single Card (Repositories)
![Single Card](https://github-badge-api.onrender.com/api/trophy?username=Souvik-Babai-Roy&mode=single&theme=neon)

---

### Add to Your GitHub Profile README

Replace `yourusername` with your actual GitHub username:

**Example 1: Dashboard with Gotham Theme**
```markdown
## 📊 GitHub Statistics

![GitHub Trophy](https://github-badge-api.onrender.com/api/trophy?username=yourusername&theme=gotham)
```

**Example 2: Badges with Dracula Theme**
```markdown
## 🏅 My Achievements

![GitHub Badges](https://github-badge-api.onrender.com/api/trophy?username=yourusername&mode=badges&theme=dracula)
```

**Example 3: Single Repositories Card**
```markdown
![Repositories](https://github-badge-api.onrender.com/api/trophy?username=yourusername&mode=single&theme=neon)
```

**Example 4: Multiple Badges with Different Themes**
```markdown
### Dashboard View
![GitHub Stats](https://github-badge-api.onrender.com/api/trophy?username=yourusername&theme=gotham)

### Achievement Badges
![Achievements](https://github-badge-api.onrender.com/api/trophy?username=yourusername&mode=badges&theme=neon)

### Repository Count
![Repos](https://github-badge-api.onrender.com/api/trophy?username=yourusername&mode=single&theme=light)
```

---

### Copy-Paste Ready URLs

Replace `yourusername` with your GitHub username:

**Dashboard:**
```
https://github-badge-api.onrender.com/api/trophy?username=yourusername
```

**Badges:**
```
https://github-badge-api.onrender.com/api/trophy?username=yourusername&mode=badges
```

**Single:**
```
https://github-badge-api.onrender.com/api/trophy?username=yourusername&mode=single
```

**With Custom Theme:**
```
https://github-badge-api.onrender.com/api/trophy?username=yourusername&theme=dracula
https://github-badge-api.onrender.com/api/trophy?username=yourusername&theme=neon
https://github-badge-api.onrender.com/api/trophy?username=yourusername&theme=light
```

---

## Deployment 🌐

### Already Hosted & Ready to Use ✅

This API is **already deployed** and live at:
```
https://github-badge-api.onrender.com/
```

No setup required—just use it!

---

### Deploy Your Own Copy

Prefer to self-host? Here are popular deployment options:

#### Deploy to Render (Recommended)

1. Fork the repository on GitHub
2. Go to [Render.com](https://render.com)
3. Connect your GitHub account
4. Create a new **Web Service**
5. Select your forked repository
6. Set these environment variables:
   - `GITHUB_TOKEN`: Your GitHub personal access token
7. Deploy!

#### Deploy to Heroku

1. **Create a Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Set environment variables**
   ```bash
   heroku config:set GITHUB_TOKEN=your_token
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

#### Deploy to Vercel/Railway/Other Platforms

The app works with any Node.js hosting. Just ensure you set the `GITHUB_TOKEN` environment variable in your deployment platform's settings.

---

## Troubleshooting 🔧

### "Username required" Error
Make sure you're passing the `username` query parameter in your URL.

### "Error fetching data" Error
1. Check if your GitHub token is valid
2. Verify the username exists
3. Check your GitHub API rate limits

### Badge not showing in Markdown
1. Test the URL directly in your browser
2. Make sure the API server is running and accessible
3. Use the public Render URL for production deployment

### Token Issues
- Regenerate your GitHub token from [Personal Access Tokens](https://github.com/settings/tokens)
- Make sure to copy the full token
- Don't share your token publicly

---

## Performance ⚡

- **Cache Duration**: 1 hour (3600 seconds)
- **SVG Format**: Lightweight and crisp at any resolution
- **API Calls**: Minimal calls to GitHub API per request

---

## Customization & Extension 🛠️

### Adding New Themes

Edit `src/themes/index.js` to add your custom theme:

```javascript
const themes = {
  mytheme: {
    bg1: "#color1",
    bg2: "#color2",
    textPrimary: "#color3",
    textSecondary: "#color4",
    accent1: "#color5",
    accent2: "#color6",
    gold: "#color7",
    silver: "#color8",
    bronze: "#color9"
  }
};
```

Then use it: `https://github-badge-api.onrender.com/api/trophy?username=yourname&theme=mytheme`

### Creating Custom Card Designs

Modify `src/builders/card.js` to customize:
- Card dimensions
- Typography styles
- Gradient effects
- Border styling
- Icon sizing

### Building New Features

The modular structure makes it easy to add:
1. **New Badge Types**: Create builders in `src/builders/`
2. **New Display Modes**: Add handlers in `src/services/`
3. **New Themes**: Add to `src/themes/`
4. **New API Endpoints**: Define in `src/routes/` (when created)

---

## Questions & Support 🤝

- **Having issues?** Check the [Troubleshooting](#troubleshooting-🔧) section
- **Found a bug?** [Open an issue](https://github.com/Souvik-Babai-Roy/github-badge-api/issues)
- **Want to contribute?** [Submit a pull request](https://github.com/Souvik-Babai-Roy/github-badge-api/pulls)
- **Need help?** Feel free to ask in the issues section

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Repository Links 🔗

- **GitHub Repository**: [github.com/Souvik-Babai-Roy/github-badge-api](https://github.com/Souvik-Babai-Roy/github-badge-api)
- **Live Demo**: [github-badge-api.onrender.com](https://github-badge-api.onrender.com/)

---

<div align="center">

**Made with ❤️ by [Souvik Babai Roy](https://github.com/Souvik-Babai-Roy)**

⭐ If you found this useful, please consider giving it a star on GitHub! ⭐

</div>
