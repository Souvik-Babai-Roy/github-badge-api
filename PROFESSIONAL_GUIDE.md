# Professional GitHub Trophy Badge API v2.0
## Complete Feature Guide & Usage Manual

---

## 🚀 Quick Start Examples

### Basic Trophy Display
```url
https://api.example.com/api/trophy?username=octocat
```

### Professional Dashboard
```url
https://api.example.com/api/trophy?username=octocat&preset=professional&theme=gotham
```

### Custom Filtered Trophies (Gold & Silver Only)
```url
https://api.example.com/api/trophy?username=octocat&medals=gold,silver&animation=glow
```

### Expert Mode with All Trophies
```url
https://api.example.com/api/trophy?username=octocat&preset=expert&animation=bounce
```

---

## 📚 Complete Parameter Reference

### Required Parameters
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `username` | string | GitHub username | `octocat` |

### Theme Parameters
| Parameter | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `theme` | string | `gotham` | gotham, dracula, neon, light, nord, solarized, monokai, github-dark, cyberpunk, gruvbox, tokyonight | Color theme |

### Display Mode Parameters
| Parameter | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `mode` | string | `dashboard` | dashboard, showcase, wall, single, cards, badges | Display mode |
| `preset` | string | None | minimalist, balanced, comprehensive, professional, expert, showcase, compact, devfocus, socialfocus | Configuration preset |
| `layout` | string | `grid` | grid, row, column, compact, expanded | Layout style |

### Animation Parameters
| Parameter | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `animation` | string | `shimmer` | none, shimmer, pulse, glow, wave, bounce, float, rotate, gradientShift, flip, rainbow | Animation effect |
| `showAnimation` | boolean | `true` | true/false | Enable/disable animations |

### Filtering Parameters
| Parameter | Type | Default | Description | Example |
|-----------|------|---------|-------------|---------|
| `medals` | string | all | Filter by medal level | `gold,silver` |
| `tiers` | string | all | Filter by tier level | `gold,platinum` |
| `categories` | string | all | Filter by category | `contribution,influence` |
| `trophies` | string | all | Specific trophy IDs | `repositories,followers,stars` |

### Display Parameters
| Parameter | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `cardWidth` | number | `280` | 50-2000 | Card width in pixels |
| `cardHeight` | number | `160` | 50-2000 | Card height in pixels |
| `spacing` | number | `20` | 50-2000 | Spacing between items |
| `padding` | number | `20` | 50-2000 | Internal padding |

### Boolean Flags
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `showStats` | boolean | `true` | Show statistics on cards |
| `showRanks` | boolean | `true` | Show rank information |
| `showIcons` | boolean | `true` | Show trophy icons |
| `darkMode` | boolean | `true` | Force dark mode |
| `hideMissing` | boolean | `false` | Hide unobtained trophies |

### Sorting Parameters
| Parameter | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `sortBy` | string | `name` | name, category, threshold | Sort trophy order |
| `sortDesc` | boolean | `false` | true/false | Sort descending |

---

## 🏆 Trophy Types & Medal System

### 14 Trophy Categories

#### Contribution Trophies
- **Repository Master** - Awarded for maintaining multiple repositories
  - Bronze: 5+ repos | Silver: 20+ repos | Gold: 50+ repos | Platinum: 100+ repos

- **Contribution Champion** - Awarded for consistent contribution activity
  - Bronze: 500+ contributions | Silver: 2000+ | Gold: 5000+ | Platinum: 10000+

#### Influence Trophies
- **Community Leader** - Building strong community followers
  - Bronze: 10+ followers | Silver: 50+ | Gold: 100+ | Platinum: 500+

- **Open Source Champion** - Contributing to open source projects
  - Bronze: 10+ contributions | Silver: 50+ | Gold: 200+ | Platinum: 1000+

#### Popularity Trophies
- **Star Collector** - Creating popular, well-received code
  - Bronze: 50+ stars | Silver: 500+ | Gold: 2000+ | Platinum: 5000+

#### Activity Trophies
- **Consistency Champion** - Maintaining active contribution streaks
  - Bronze: 15 days | Silver: 30 days | Gold: 60 days | Platinum: 90 days

#### Quality Trophies
- **Code Review Expert** - Reviewing code and maintaining quality
  - Bronze: 50+ reviews | Silver: 200+ | Gold: 1000+ | Platinum: 5000+

- **Issue Solver** - Resolving issues and helping others
  - Bronze: 20+ resolved | Silver: 100+ | Gold: 500+ | Platinum: 1000+

#### Knowledge Trophies
- **Documentation Master** - Creating comprehensive documentation
  - Bronze: 5+ docs | Silver: 15+ | Gold: 50+ | Platinum: 100+

#### Collaboration Trophies
- **Collaboration Specialist** - Working across multiple projects
  - Bronze: 3+ collaborations | Silver: 10+ | Gold: 25+ | Platinum: 50+

#### Skill Trophies
- **Polyglot Developer** - Using multiple programming languages
  - Bronze: 3+ languages | Silver: 7+ | Gold: 12+ | Platinum: 20+

#### Innovation Trophies
- **Innovation Pioneer** - Creating unique and innovative projects
  - Bronze: 2 unique projects | Silver: 5+ | Gold: 15+ | Platinum: 30+

#### Premium Trophies
- **GitHub Pro** - GitHub Pro account status (Gold medal only)

---

## ✨ Animation Options

| Animation | Duration | Effect | Best For |
|-----------|----------|--------|----------|
| `none` | 0s | Static, no animation | Print/professional documents |
| `shimmer` | 3s | Glossy shine effect | Classic, elegant look |
| `pulse` | 2s | Opacity pulsing | Subtle, attention-grabbing |
| `glow` | 2s | Radiant outer glow | Highlight important badges |
| `wave` | 3s | Subtle wave distortion | Modern, dynamic feel |
| `bounce` | 1.5s | Scale pulsing | Playful, energetic |
| `float` | 3s | Gentle vertical motion | Smooth, flowing effect |
| `rotate` | 4s | Continuous rotation | Trophy icons, spinners |
| `rainbow` | 4s | Color cycling gradient | Eye-catching, vibrant |
| `flip` | 2s | 3D flip effect | Interactive, fun |
| `gradientShift` | 3s | Color animation | Modern, trendy |

---

## 🎨 Color Themes

### Premium Themes (11 Total)

1. **Gotham** - Dark, sophisticated blue/cyan
2. **Dracula** - Deep purple, bright accents
3. **Neon** - Vibrant neon colors, cyberpunk
4. **Light** - Clean bright colors
5. **Nord** - Arctic, professional blues
6. **Solarized** - Warm, accessible colors
7. **Monokai** - Classic editor colors
8. **GitHub Dark** - Official GitHub dark theme
9. **Cyberpunk** - Futuristic neon vibes
10. **Gruvbox** - Retro groovy brown/orange
11. **Tokyo Night** - Japanese-inspired pastels

---

## 🎯 Presets Explained

### Minimalist
- **Best for:** Clean GitHub profiles
- **Features:** Only gold/platinum medals, 3 column row layout
- **Size:** Compact and efficient
- **Example:** `?preset=minimalist`

### Balanced
- **Best for:** General purpose showcasing
- **Features:** Mixed medals, grid layout, 4 trophies
- **Size:** Medium
- **Example:** `?preset=balanced`

### Comprehensive
- **Best for:** Complete portfolio display
- **Features:** All trophies, wall layout
- **Size:** Large
- **Example:** `?preset=comprehensive`

### Professional
- **Best for:** Business/corporate use
- **Features:** Premium appearance, selected trophies
- **Animation:** Glow effect
- **Example:** `?preset=professional`

### Expert
- **Best for:** Detailed breakdown
- **Features:** Deep dive into achievements
- **Animation:** Bounce effect
- **Size:** Most comprehensive
- **Example:** `?preset=expert`

### Developer-Focus
- **Best for:** Coding-centric profiles
- **Features:** Emphasizes coding metrics
- **Includes:** Repositories, contributions, open source, code review

### Social-Focus
- **Best for:** Community-oriented developers
- **Features:** Emphasizes social metrics
- **Includes:** Followers, collaboration, streak

---

## 🔧 Advanced Customization Examples

### Example 1: Gold-only Professional Display
```url
?username=octocat&medals=gold&theme=professional&animation=glow
```

### Example 2: Developer Metrics Dashboard
```url
?username=octocat&preset=devfocus&layout=grid&cardWidth=300
```

### Example 3: Minimal Showcase
```url
?username=octocat&preset=minimalist&theme=light&animation=none
```

### Example 4: Filtered Comprehensive View
```url
?username=octocat&categories=contribution,influence&medals=gold,silver&sortBy=category
```

### Example 5: Custom Animation Demo
```url
?username=octocat&trophies=repositories,followers,stars&animation=rainbow&theme=cyberpunk
```

---

## 📊 Categories

| Category | Meaning | Trophies |
|----------|---------|----------|
| `contribution` | Code contributions | Repositories, Contributions |
| `influence` | Community impact | Followers, Open Source |
| `popularity` | Code adoption | Stars |
| `activity` | Consistency | Streak |
| `teamwork` | Collaboration | Collaboration Specialist |
| `discipline` | Dedication | Consistency, Streak |
| `community` | Community involvement | Open Source, Collaboration |
| `support` | Helping others | Issue Solver |
| `quality` | Code quality | Code Review |
| `knowledge` | Documentation | Documentation Master |
| `skill` | Technical depth | Polyglot Developer |
| `creativity` | Innovation | Innovation Pioneer |
| `premium` | Premium features | GitHub Pro |

---

## 🚀 Integration Examples

### Markdown (GitHub README)
```markdown
[![Trophy Showcase](https://YOUR-API/api/trophy?username=octocat&preset=professional)](https://github.com/octocat)
```

### HTML Profile
```html
<img src="https://YOUR-API/api/trophy?username=octocat&theme=cyberpunk&animation=glow" alt="GitHub Trophies">
```

### Dynamic with Custom Theme
```html
<img src="https://YOUR-API/api/trophy?username=octocat&medals=gold,platinum&animation=pulse&theme=tokyonight" alt="Premium Trophies">
```

### Filtered Categories
```markdown
![DevMetrics](https://YOUR-API/api/trophy?username=octocat&categories=contribution,activity&preset=devfocus)
```

---

## 📈 API Response Format

### Success Response (200)
```
Content-Type: image/svg+xml
Cache-Control: public, max-age=300
Content: Valid SVG image
```

### Error Response (400)
```json
{
  "error": "Validation error: medals must be one of: gold, silver, bronze, platinum"
}
```

---

## ⚡ Performance Tips

1. **Use Presets** - Faster loading than custom configs
2. **Minimize Trophies** - Reduce cards for faster rendering
3. **Static Animations** - Use `animation=none` for instant load
4. **Cache Headers** - Set 5-minute cache in your CDN
5. **Compress Responses** - Use gzip compression (already enabled)

---

## 🔒 Rate Limiting

- **Default:** 100 requests per minute
- **Per IP:** Enforced
- **Headers:** X-RateLimit-Remaining, X-RateLimit-Reset included

---

## 🛠️ Configuration & Deployment

See `src/config/index.js` for environment variables:
- `GITHUB_TOKEN` - Personal access token
- `CACHE_TTL` - Cache time-to-live (seconds)
- `RATE_LIMIT_MAX` - Max requests per window
- `RATE_LIMIT_WINDOW` - Rate limit window (ms)

---

## 📝 Changelog

### v2.0.0 (Current - Professional Release)
- ✨ 14 Trophy Types System
- 🎨 11 Premium Color Themes
- ⚡ 10+ Animation Effects
- 🎯 9 Configuration Presets
- 🔧 Advanced Filtering System
- 📊 Medal/Tier Classification
- 🚀 Professional Architecture

### v1.0.0 (Legacy)
- Basic 3-card dashboard
- Simple trophy display

