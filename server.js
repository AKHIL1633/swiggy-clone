const express = require("express");
const { RESTAURANT_LIST_API, MENU_API } = require("./src/utils/constant");

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const { lat = "21.2611169", lng = "81.5993951" } = req.query;
    const swiggyUrl = `${RESTAURANT_LIST_API}?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    const response = await fetch(swiggyUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/menu", async (req, res) => {
  try {
    const { resId, lat = "21.2611169", lng = "81.5993951" } = req.query;
    const swiggyUrl = `${MENU_API}?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

    const response = await fetch(swiggyUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Swiggy proxy server running at http://localhost:${PORT}`)
);
