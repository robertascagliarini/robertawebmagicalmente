// Scrolls a page and saves 1440x900 viewport frames (same cadence as the reference capture)
import puppeteer from "puppeteer";
import fs from "fs";
const [url, name, width = 1440, height = 900] = [process.argv[2], process.argv[3], +process.argv[4] || 1440, +process.argv[5] || 900];
const dir = "temporary screenshots/" + name; fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.evaluateOnNewDocument(() => localStorage.setItem("cookie-consent", "declined"));
const errs = []; page.on("pageerror", e => errs.push(e.message)); page.on("console", m => m.type() === "error" && errs.push(m.text()));
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise(r => setTimeout(r, 800));
const h = await page.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < h; y += Math.round(height * 0.89)) {
  await page.evaluate(y => window.scrollTo(0, y), y);
  await new Promise(r => setTimeout(r, 1100));
  await page.screenshot({ path: `${dir}/f${String(i++).padStart(2, "0")}.png` });
}
const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
await browser.close();
console.log(name, "height", h, "frames", i, "hscroll", overflow, errs.length ? "ERRORS: " + errs.join(" | ") : "no errors");
