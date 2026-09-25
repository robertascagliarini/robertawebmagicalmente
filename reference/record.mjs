import puppeteer from "puppeteer";
import ffmpeg from "ffmpeg-static";
const out = "reference/wearerebel";
const [url, name] = [process.argv[2], process.argv[3]];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise(r => setTimeout(r, 2000));
const rec = await page.screencast({ path: `${out}/${name}-scroll.webm`, ffmpegPath: ffmpeg });
const h = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < h; y += 12) { await page.evaluate(y => window.scrollTo(0, y), y); await new Promise(r => setTimeout(r, 25)); }
await new Promise(r => setTimeout(r, 1500));
await rec.stop();
if (name === "home") {
  await page.evaluate(() => window.scrollTo(0, 0));
  const el = await page.$$eval('*', els => { const e = els.find(x => x.children.length===0 && /OPEN/i.test(x.innerText||'') && x.getBoundingClientRect().x > 1300); if (e) { const r = e.getBoundingClientRect(); return [r.x + r.width/2, r.y + r.height/2]; } return [1406, 90]; });
  await page.mouse.click(el[0], el[1]);
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: `${out}/home-menu-open.png` });
}
await browser.close(); console.log("ok", name);
