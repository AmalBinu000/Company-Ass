const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const PORT = 3000;

app.get("/github-user/:username", async (req, res) => {
  const username = req.params.username;
  const url = `https://github.com/${username}`;

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    
    await page.waitForSelector("main");

    
    const userData = await page.evaluate(() => {
      const name = document.querySelector("h1.vcard-names span.p-name")?.innerText.trim() || null;
      const username = document.querySelector("h1.vcard-names span.p-nickname")?.innerText.trim() || null;
      const bio = document.querySelector("div.p-note")?.innerText.trim() || null;

      const repos = document.querySelector('a[href$="?tab=repositories"] span.Counter')?.innerText.trim().replace(",", "") || "0";
      const followers = document.querySelector('a[href$="?tab=followers"] span.Counter')?.innerText.trim().replace(",", "") || "0";
      const following = document.querySelector('a[href$="?tab=following"] span.Counter')?.innerText.trim().replace(",", "") || "0";

      return {
        name,
        username,
        bio,
        repositories: parseInt(repos),
        followers: parseInt(followers),
        following: parseInt(following)
      };
    });

    
    await page.goto(`${url}?tab=repositories`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("li source");

    
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    
    const topRepositories = await page.evaluate(() => {
      const repos = [];
      const items = document.querySelectorAll("li source div.d-inline-block h3 a");
      const stars = document.querySelectorAll("li source .f6 .Link--muted");

      for (let i = 0; i < Math.min(3, items.length); i++) {
        const name = items[i]?.innerText.trim();
        const starText = stars[i]?.innerText.trim() || "0";
        const starsCount = parseInt(starText.replace(",", "")) || 0;
        if (name) repos.push({ name, stars: starsCount });
      }
      return repos;
    });

    userData.top_repositories = topRepositories;

    res.json(userData);
  } catch (err) {
    console.error("Error scraping GitHub:", err);
    res.status(500).json({ error: "Failed to scrape GitHub profile" });
  } finally {
    if (browser) await browser.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
