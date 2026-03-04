const themes = require('./themes.json'); // or load from env

function getTheme(name) {
  return themes[name] || themes.gotham; // fallback to gotham
}

module.exports = { getTheme };