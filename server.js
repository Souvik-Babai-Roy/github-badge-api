const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Helper to generate simple SVG
function generateBadge(label, value) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="40">
    <rect width="250" height="40" fill="#1f2937"/>
    <text x="125" y="25" fill="#ffffff" font-size="16" text-anchor="middle" font-family="Arial">
      ${label}: ${value}
    </text>
  </svg>`;
}

app.get("/api/stars", async (req, res) => {
  const username = req.query.username;

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

    const publicRepos = response.data.public_repos;

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(generateBadge("Public Repos", publicRepos));
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});