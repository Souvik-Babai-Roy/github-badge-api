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

- 🎨 **4 Premium Themes**: Gotham, Dracula, Neon, and Light
- 📊 **Multiple Display Modes**: Dashboard, Achievement Badges, and Single Card
- ⚡ **Real-time Data**: Live GitHub statistics via GitHub API
- 🏅 **Smart Ranking System**: Automatic rank assignment based on stats
- 🪶 **Lightweight SVG**: Crisp, scalable badges at any resolution
- ⏱️ **Smart Caching**: 1-hour cache to minimize API calls
- 🚀 **Production Ready**: Hosted on Render, zero setup needed
- 🎯 **Easy Integration**: Single URL for markdown or HTML
- 📱 **Responsive Design**: Works perfectly on all devices

---

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

### 1. Gotham (Default)
Dark blue theme with cyan accents. Perfect for a modern look.

```
http://localhost:3000/api/trophy?username=octocat&theme=gotham
```

### 2. Dracula
Purple-toned dark theme. Great for a sleek appearance.

```
http://localhost:3000/api/trophy?username=octocat&theme=dracula
```

### 3. Neon
High-contrast neon theme with vibrant colors on black.

```
http://localhost:3000/api/trophy?username=octocat&theme=neon
```

### 4. Light
Light theme with dark text. Perfect for light backgrounds.

```
http://localhost:3000/api/trophy?username=octocat&theme=light
```

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

### Live Badge Previews

#### 🎨 Theme: Gotham (Default)
![Gotham Theme](https://github-badge-api.onrender.com/api/trophy?username=torvalds&theme=gotham)

#### 🦇 Theme: Dracula
![Dracula Theme](https://github-badge-api.onrender.com/api/trophy?username=torvalds&theme=dracula)

#### ⚡ Theme: Neon
![Neon Theme](https://github-badge-api.onrender.com/api/trophy?username=torvalds&theme=neon)

#### ☀️ Theme: Light
![Light Theme](https://github-badge-api.onrender.com/api/trophy?username=torvalds&theme=light)

---

### Display Modes

#### Dashboard Mode (Shows all stats with cards)
![Dashboard Mode](https://github-badge-api.onrender.com/api/trophy?username=octocat&mode=dashboard&theme=gotham)

#### Award Badges Mode (Achievement circles)
![Badges Mode](https://github-badge-api.onrender.com/api/trophy?username=octocat&mode=badges&theme=dracula)

#### Single Card Mode (Just one metric)
![Single Card](https://github-badge-api.onrender.com/api/trophy?username=octocat&mode=single&theme=neon)

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

## Customization 🛠️

To add new themes, edit the `themes` object in `server.js`:

```javascript
const themes = {
  yourtheme: {
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

Then use it: `http://localhost:3000/api/trophy?username=yourname&theme=yourtheme`

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
