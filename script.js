const date = new Date("2026-12-31T20:00:00").getTime();
setInterval(() => {
  const diff = date - Date.now();
  const j = Math.floor(diff / 86400000);
  document.getElementById("countdown").textContent = j + " jours restants";
}, 1000);


