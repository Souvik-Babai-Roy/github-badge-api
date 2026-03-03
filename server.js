const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// 🔥 Rank Logic
function calculateRank(value) {
  if (value >= 200) return "S";
  if (value >= 100) return "A";
  if (value >= 50) return "B";
  return "C";
}

// 🎨 Trophy SVG Generator
function generateTrophy(title, value, rank, progressWidth) {
  return `
<svg width="340" height="140" viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>

    <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>

  <rect width="340" height="140" rx="20" fill="url(#bg)"/>

  <text x="24" y="35" fill="#94a3b8" font-size="14" font-family="Arial">
    ${title}
  </text>

  <text x="24" y="75" fill="#ffffff" font-size="28" font-weight="bold" font-family="Arial">
    ${value}
  </text>

  <circle cx="290" cy="45" r="26" fill="#111827" stroke="#334155" stroke-width="3"/>
  <text x="282" y="53" fill="#22c55e" font-size="22" font-weight="bold" font-family="Arial">
    ${rank}
  </text>

  <rect x="24" y="105" width="292" height="8" rx="4" fill="#334155"/>
  <rect x="24" y="105" width="${progressWidth}" height="8" rx="4" fill="url(#progressGrad)"/>

</svg>
`;
}

app.get("/api/trophy", async (req, res) => {
  const username = req.query.username;
  const type = req.query.type || "repos";

  if (!username) {
    return res.status(400).send("Username required");
  }

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      }
    );

    const data = response.data;

    let value = 0;
    let title = "";

    if (type === "repos") {
      value = data.public_repos;
      title = "Public Repositories";
    } else if (type === "followers") {
      value = data.followers;
      title = "Followers";
    } else if (type === "gists") {
      value = data.public_gists;
      title = "Public Gists";
    } else {
      value = data.public_repos;
      title = "Public Repositories";
    }

    const rank = calculateRank(value);

    const progressWidth = Math.min((value / 300) * 292, 292);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(generateTrophy(title, value, rank, progressWidth));

  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});