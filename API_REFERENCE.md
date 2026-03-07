# API Reference - GitHub Trophy Badge API v2.0

## Base URL
```
https://api.example.com/api
```

---

## Endpoints

### 1. Generate Trophy Badges
**GET** `/api/trophy`

Generate customizable SVG trophy badges based on GitHub user statistics.

#### Parameters
All parameters are optional except `username`.

```
GET /api/trophy?username=octocat&theme=cyberpunk&medals=gold,silver
```

#### Query Parameters

##### Core Parameters
- **username** (string, required)
  - GitHub username
  - Length: 1-39 characters
  - Example: `octocat`

##### Theme & Display
- **theme** (string, default: "gotham")
  - Available: gotham, dracula, neon, light, nord, solarized, monokai, github-dark, cyberpunk, gruvbox, tokyonight
  - Example: `?theme=tokyonight`

- **mode** (string, default: "dashboard")
  - Available: dashboard, showcase, wall, single, cards, badges
  - Example: `?mode=wall`

- **layout** (string, default: "grid")
  - Available: grid, row, column, compact, expanded
  - Example: `?layout=row`

##### Presets
- **preset** (string, optional)
  - Quick configuration: minimalist, balanced, comprehensive, professional, expert, showcase, compact, devfocus, socialfocus
  - Overrides individual settings
  - Example: `?preset=professional`

##### Filtering
- **medals** (string, comma-separated)
  - Filter by medal level: gold, silver, bronze, platinum
  - Default: all
  - Example: `?medals=gold,silver`

- **tiers** (string, comma-separated)
  - Filter by tier: bronze, silver, gold, platinum
  - Example: `?tiers=gold,platinum`

- **categories** (string, comma-separated)
  - Filter by category: contribution, influence, popularity, activity, premium, teamwork, discipline, community, support, quality, knowledge, skill, creativity
  - Example: `?categories=contribution,influence`

- **trophies** (string, comma-separated)
  - Specific trophy IDs: repositories, followers, stars, contributions, githubPro, collaboration, streak, openSource, issues, codeReview, documentation, polyglot, innovation
  - Example: `?trophies=repositories,followers,stars`

##### Animations
- **animation** (string, default: "shimmer")
  - Available: none, shimmer, pulse, glow, wave, bounce, float, rotate, gradientShift, flip, rainbow
  - Example: `?animation=glow`

- **showAnimation** (boolean, default: true)
  - Enable/disable animations
  - Example: `?showAnimation=false`

##### Dimensions
- **cardWidth** (number, default: 280, range: 50-2000)
  - Card width in pixels
  - Example: `?cardWidth=350`

- **cardHeight** (number, default: 160, range: 50-2000)
  - Card height in pixels
  - Example: `?cardHeight=200`

- **badgeWidth** (number, default: 120, range: 50-2000)
  - Badge width in pixels
  - Example: `?badgeWidth=140`

- **badgeHeight** (number, default: 120, range: 50-2000)
  - Badge height in pixels
  - Example: `?badgeHeight=140`

- **spacing** (number, default: 20, range: 50-2000)
  - Spacing between items
  - Example: `?spacing=25`

- **padding** (number, default: 20, range: 50-2000)
  - Internal padding
  - Example: `?padding=30`

##### Display Options
- **showStats** (boolean, default: true)
  - Show statistics on cards
  - Example: `?showStats=false`

- **showRanks** (boolean, default: true)
  - Show rank information
  - Example: `?showRanks=false`

- **showIcons** (boolean, default: true)
  - Show trophy icons
  - Example: `?showIcons=false`

- **darkMode** (boolean, default: true)
  - Force dark mode
  - Example: `?darkMode=false`

- **hideMissing** (boolean, default: false)
  - Hide trophies below minimum threshold
  - Example: `?hideMissing=true`

##### Sorting
- **sortBy** (string, default: "name")
  - Sort criteria: name, category, threshold
  - Example: `?sortBy=category`

- **sortDesc** (boolean, default: false)
  - Sort in descending order
  - Example: `?sortDesc=true`

#### Response

**Status: 200 OK**

```
Content-Type: image/svg+xml
Cache-Control: public, max-age=300

<?xml version="1.0" encoding="UTF-8"?>
<svg width="..." height="..." xmlns="...">
  <!-- SVG content -->
</svg>
```

#### Error Responses

**Status: 400 Bad Request**
```json
{
  "error": "Validation error: username is required and must be a string"
}
```

**Status: 404 Not Found**
```json
{
  "error": "GitHub user not found"
}
```

**Status: 429 Too Many Requests**
```json
{
  "error": "Rate limit exceeded"
}
```

#### Examples

##### Basic Usage
```
GET /api/trophy?username=octocat
```

##### Professional Display
```
GET /api/trophy?username=octocat&preset=professional&theme=cyberpunk
```

##### Filter Gold Medals Only
```
GET /api/trophy?username=octocat&medals=gold&animation=glow
```

##### Custom Dimensions
```
GET /api/trophy?username=octocat&cardWidth=400&cardHeight=250&spacing=30
```

##### Developer Focus
```
GET /api/trophy?username=octocat&preset=devfocus&categories=contribution,activity
```

---

### 2. List Available Presets
**GET** `/api/presets`

Get information about all available preset configurations.

#### Response

**Status: 200 OK**

```json
{
  "presets": [
    {
      "id": "minimalist",
      "name": "Minimalist",
      "description": "Shows only top achievements - clean and minimal"
    },
    {
      "id": "balanced",
      "name": "Balanced",
      "description": "A well-rounded display of achievements"
    },
    ...
  ],
  "description": "Use preset parameter in /api/trophy endpoint"
}
```

#### Example
```
GET /api/presets
```

---

### 3. Validation Information
**GET** `/api/validation`

Get detailed information about valid parameters and options.

#### Response

**Status: 200 OK**

```json
{
  "modes": ["dashboard", "showcase", "wall", "single", "cards", "badges"],
  "medals": ["gold", "silver", "bronze", "platinum"],
  "tiers": ["bronze", "silver", "gold", "platinum"],
  "categories": ["contribution", "influence", "popularity", ...],
  "sortOptions": ["name", "category", "threshold"],
  "animations": ["none", "shimmer", "pulse", "glow", ...],
  "trophies": ["repositories", "followers", "stars", ...],
  "dimensionConstraints": {
    "min": 50,
    "max": 2000,
    "description": "Width, height, and size parameters must be between 50 and 2000 pixels"
  }
}
```

#### Example
```
GET /api/validation
```

---

### 4. API Documentation
**GET** `/api/docs`

Get comprehensive API documentation and endpoint information.

#### Response

**Status: 200 OK**

```json
{
  "name": "GitHub Trophy Badge API v2.0",
  "description": "Professional GitHub trophy badge generator with advanced filtering and customization",
  "version": "2.0.0",
  "endpoints": {
    "/api/trophy": {...},
    "/api/presets": {...},
    "/api/validation": {...},
    "/api/docs": {...}
  }
}
```

#### Example
```
GET /api/docs
```

---

### 5. Health Check
**GET** `/health`

Check API health status.

#### Response

**Status: 200 OK**

```json
{
  "status": "OK"
}
```

---

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 400 | Validation error | Invalid parameters |
| 404 | Endpoint not found | Invalid endpoint or user not found |
| 429 | Rate limit exceeded | Too many requests |
| 500 | Internal server error | Server error |

---

## Common Patterns

### Get Gold & Platinum Only
```
/api/trophy?username=octocat&medals=gold,platinum
```

### Professional View
```
/api/trophy?username=octocat&preset=professional
```

### Minimal Static Badges
```
/api/trophy?username=octocat&animation=none&layout=row
```

### Full Collection
```
/api/trophy?username=octocat&preset=expert
```

### Filtered to Development
```
/api/trophy?username=octocat&categories=contribution,activity,quality
```

---

## Rate Limiting

The API enforces rate limiting to ensure fair usage.

- **Limit**: 100 requests per minute per IP
- **Headers**:
  - `X-RateLimit-Limit`: 100
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Unix timestamp of reset

---

## Caching

API responses are cached to improve performance:

- **Cache Duration**: 300 seconds (5 minutes)
- **Cache Strategy**: Per-user caching
- **Cache Key**: username + parameters
- **Header**: `Cache-Control: public, max-age=300`

---

## SDKs & Libraries

### Markdown Embedding
```markdown
![GitHub Trophies](https://API_URL/api/trophy?username=USER)
```

### HTML Embedding
```html
<img src="https://API_URL/api/trophy?username=USER" alt="GitHub Trophies">
```

### Dynamic Loading (JavaScript)
```javascript
const trophyUrl = `https://API_URL/api/trophy?username=${username}&theme=cyberpunk`;
document.getElementById('trophies').src = trophyUrl;
```

---

## Best Practices

1. **Always specify username** - Required parameter
2. **Use presets** - Faster than custom configuration
3. **Cache responses** - Use HTTP caching headers
4. **Respect rate limits** - Monitor X-RateLimit headers
5. **Test parameters** - Use `/api/validation` endpoint
6. **Mobile-friendly** - Test responsive layouts
7. **Accessibility** - Consider alt text in images

---

## Support

For issues or questions:
- Check `/api/validation` for valid parameters
- Review `/api/docs` for detailed documentation
- Visit `/api/presets` for preset options

