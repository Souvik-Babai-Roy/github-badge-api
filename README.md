# GitHub Badge API 🏆

<div align="center">

**Generate beautiful, customizable SVG badges for your GitHub profile in seconds!**

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?style=flat-square)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-v4.18+-blue?style=flat-square)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen?style=flat-square)](https://github-badge-api.onrender.com/)

**[View on GitHub](https://github.com/Souvik-Babai-Roy/github-badge-api) • [Live API](https://github-badge-api.onrender.com/)**

</div>

A production-ready GitHub Badge API that generates stunning, dynamic SVG badges showcasing your GitHub statistics. Display your repositories, followers, and total stars with multiple customizable themes—perfect for your GitHub profile, readme files, or project documentation.

---

## Features ✨

- 🎨 **10+ Premium Themes**: Gotham, Dracula, Neon, Light, Nord, Solarized, Monokai, GitHub Dark, Cyberpunk, Gruvbox, Tokyo Night
- 📊 **Multiple Display Modes**: Dashboard, Achievement Badges, Single Card, and Trophy Wall
- ⚡ **Real-time Data**: Live GitHub statistics via GitHub API
- 🏅 **Smart Ranking System**: Automatic rank assignment (S, A, B) based on performance
- 🪶 **Professional SVG Design**: Crisp, scalable graphics at any resolution
- ✨ **Modern Styling**: Glassmorphism effects, gradients, shadows, and animations
- ⏱️ **Smart Caching**: 1-hour cache to minimize API calls
- 🚀 **Production Ready**: Enterprise-grade hosted on Render
- 🎯 **Easy Integration**: Single URL for markdown or HTML
- 📱 **Responsive Design**: Works perfectly on all devices
- 🏗️ **Modular Architecture**: Clean, maintainable, extensible code
- 🎖️ **Medal Badges**: Visual rank indicators with achievement tracking
- 💎 **Premium UI Elements**: Drop shadows, accent borders, decorative elements

---

---

## Project Architecture 🏗️

The application now features a clean, modular architecture for better maintainability and scalability:

```
src/
├── builders/          # SVG component builders
│   └── card.js       # Card and trophy icon generation
├── config/           # Configuration files
├── middleware/       # Express middleware
├── services/         # GitHub API services
├── themes/           # Theme definitions
├── utils/            # Utility functions (ranking, etc.)
└── app.js            # Express application setup

server.js             # Entry point
package.json          # Dependencies
```

**Key Components:**
- **Card Builder**: Enhanced card rendering with gradients, shadows, and improved styling
- **Trophy Icon**: Scalable icon system with customizable sizes
- **Theme System**: Centralized theme management
- **Services**: GitHub API integration layer
- **Utilities**: Ranking and helper functions

## Quick Start 🚀

### Use the Free Hosted Version (No Setup Required!)

The API is already live and ready to use at:
```
https://github-badge-api.onrender.com/
```

Just use your GitHub username in the URL parameters—no installation needed!

---

### Self-Host Instructions

If you want to run it locally or on your own server:

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A GitHub personal access token

#### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Souvik-Babai-Roy/github-badge-api.git
   cd github-badge-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   GITHUB_TOKEN=your_github_personal_access_token_here
   ```

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
http://localhost:3000/api/trophy?username=your-github-username
```

**Markdown:**
```markdown
![GitHub Badge](http://localhost:3000/api/trophy?username=your-github-username)
```

---

### 2. Badges Mode
Displays achievement badges (circular) for various milestones

**URL:**
```
http://localhost:3000/api/trophy?username=your-github-username&mode=badges
```

**Markdown:**
```markdown
![GitHub Badges](http://localhost:3000/api/trophy?username=your-github-username&mode=badges)
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
http://localhost:3000/api/trophy?username=your-github-username&mode=single
```

**Markdown:**
```markdown
![GitHub Single Card](http://localhost:3000/api/trophy?username=your-github-username&mode=single)
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
2. Make sure your server is running if using localhost
3. Use a public URL if deploying (not localhost)

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
