# GitHub Badge API 🏆

A custom GitHub Badge API that generates beautiful, dynamic SVG badges showcasing your GitHub statistics. Display your repositories, followers, and total stars with customizable themes directly on your GitHub profile or project documentation.

---

## Features ✨

- **Multiple Display Modes**: Dashboard, Badges, and Single Card views
- **4 Built-in Themes**: Gotham, Dracula, Neon, and Light
- **Real-time GitHub Data**: Fetches live statistics from GitHub API
- **Ranking System**: Automatically ranks users based on stats
- **SVG-based**: Lightweight, crisp, and scalable
- **Caching**: Built-in 1-hour cache for performance
- **Easy Integration**: Simple URL-based badges for markdown

---

## Installation 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A GitHub personal access token

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/github-badge-api.git
   cd github-badge-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
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

### Main Endpoint

```
GET /api/trophy
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `username` | string | **required** | GitHub username |
| `theme` | string | `gotham` | Theme name (gotham, dracula, neon, light) |
| `mode` | string | `dashboard` | Display mode (dashboard, badges, single) |

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

### Example 1: Dashboard with Dracula Theme
```
http://localhost:3000/api/trophy?username=torvalds&theme=dracula
```

### Example 2: Badges with Neon Theme
```
http://localhost:3000/api/trophy?username=gvanrossum&mode=badges&theme=neon
```

### Example 3: Single Card with Light Theme
```
http://localhost:3000/api/trophy?username=octocat&mode=single&theme=light
```

### Using in README.md
```markdown
# My GitHub Profile

![GitHub Stats](http://localhost:3000/api/trophy?username=yourname&theme=gotham)

![My Achievements](http://localhost:3000/api/trophy?username=yourname&mode=badges&theme=dracula)
```

---

## Deployment 🌐

### Deploy to Heroku

1. **Create a Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Set environment variables**
   ```bash
   heroku config:set GITHUB_TOKEN=your_token
   heroku config:set PORT=80
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Deploy to Other Platforms

The app works with any Node.js hosting (Vercel, Railway, render, etc.). Just set the `GITHUB_TOKEN` environment variable.

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

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support & Contributing 🤝

Found a bug or want to contribute? Feel free to open an issue or submit a pull request!

---

## Made with ❤️

Created to showcase GitHub achievements in style.
