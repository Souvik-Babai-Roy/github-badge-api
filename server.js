const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// ======================
// 🎨 THEMES
// ======================

const themes = {
  gotham: {
    bg1: "#0f172a",
    bg2: "#1e293b",
    textPrimary: "#ffffff",
    textSecondary: "#94a3b8",
    accent1: "#3b82f6",
    accent2: "#06b6d4",
    gold: "#facc15",
    silver: "#cbd5e1",
    bronze: "#f97316"
  },
  dracula: {
    bg1: "#282a36",
    bg2: "#44475a",
    textPrimary: "#f8f8f2",
    textSecondary: "#bd93f9",
    accent1: "#ff79c6",
    accent2: "#8be9fd",
    gold: "#ffb86c",
    silver: "#f8f8f2",
    bronze: "#ff5555"
  },
  neon: {
    bg1: "#000000",
    bg2: "#111111",
    textPrimary: "#ffffff",
    textSecondary: "#00ffff",
    accent1: "#00ffcc",
    accent2: "#00ffff",
    gold: "#39ff14",
    silver: "#00ffff",
    bronze: "#ff00ff"
  },
  light: {
    bg1: "#f3f4f6",
    bg2: "#e5e7eb",
    textPrimary: "#111827",
    textSecondary: "#6b7280",
    accent1: "#2563eb",
    accent2: "#0891b2",
    gold: "#ca8a04",
    silver: "#9ca3af",
    bronze: "#ea580c"
  }
};

// ======================
// 🏆 RANK SYSTEM
// ======================

function getRank(value) {
  if (value >= 500) return { label: "S", medal: "gold" };
  if (value >= 200) return { label: "A", medal: "silver" };
  return { label: "B", medal: "bronze" };
}

// ======================
// ⭐ TOTAL STARS
// ======================

async function getTotalStars(username) {
  const repos = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
  );

  return repos.data.reduce((sum, r) => sum + r.stargazers_count, 0);
}

// ======================
// 🏅 TROPHY ICON
// ======================

function trophyIcon(color) {
  return `
  <path d="M20 10 L40 10 L35 30 L25 30 Z" fill="${color}" />
  <rect x="27" y="30" width="6" height="10" fill="${color}" />
  <rect x="22" y="40" width="16" height="4" fill="${color}" />
  `;
}

// ======================
// 🎴 CARD
// ======================

function createCard(x, title, value, theme) {
  const rank = getRank(value);
  const medalColor = theme[rank.medal];

  return `
  <g transform="translate(${x},0)">
    <rect width="280" height="160" rx="20" fill="url(#bg)" />

    <text x="20" y="35" fill="${theme.textSecondary}" font-size="14">
      ${title}
    </text>

    <text x="20" y="80" fill="${theme.textPrimary}" font-size="32" font-weight="bold">
      ${value}
    </text>

    <text x="20" y="115" fill="${medalColor}" font-size="18" font-weight="bold">
      Rank ${rank.label}
    </text>

    <g transform="translate(200,40)">
      ${trophyIcon(medalColor)}
    </g>
  </g>
  `;
}

// ======================
// 🏅 ACHIEVEMENT BADGE MODE
// ======================

function achievementBadge(x, label, achieved, theme) {
  const color = achieved ? theme.gold : "#555";

  return `
  <g transform="translate(${x},0)">
    <circle cx="60" cy="60" r="50" fill="url(#bg)" stroke="${color}" stroke-width="4"/>
    <text x="60" y="65" text-anchor="middle" fill="${color}" font-size="14">
      ${label}
    </text>
  </g>
  `;
}

// ======================
// 🚀 ENDPOINT
// ======================

app.get("/api/trophy", async (req, res) => {
  const username = req.query.username;
  const themeName = req.query.theme || "gotham";
  const mode = req.query.mode || "dashboard"; // dashboard | badges | single

  if (!username) {
    return res.status(400).send("Username required");
  }

  const theme = themes[themeName] || themes.gotham;

  try {
    const userRes = await axios.get(
      `https://api.github.com/users/${username}`,
      { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
    );

    const user = userRes.data;
    const stars = await getTotalStars(username);

    let svgContent = "";
    let width = 900;

    if (mode === "dashboard") {
      svgContent += createCard(0, "Repositories", user.public_repos, theme);
      svgContent += createCard(300, "Followers", user.followers, theme);
      svgContent += createCard(600, "Total Stars", stars, theme);
    }

    if (mode === "badges") {
      width = 400;
      svgContent += achievementBadge(0, "100+ Repos", user.public_repos >= 100, theme);
      svgContent += achievementBadge(140, "100+ Stars", stars >= 100, theme);
      svgContent += achievementBadge(280, "50+ Followers", user.followers >= 50, theme);
    }

    if (mode === "single") {
      width = 300;
      svgContent += createCard(0, "Repositories", user.public_repos, theme);
    }

    const svg = `
<svg width="${width}" height="180" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${theme.bg1}"/>
      <stop offset="100%" stop-color="${theme.bg2}"/>
    </linearGradient>

    <linearGradient id="shimmer">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1">
        <animate attributeName="offset" values="-1;1" dur="3s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
  </defs>

  ${svgContent}

</svg>
`;

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(svg);

  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
