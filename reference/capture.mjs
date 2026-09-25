import puppeteer from "puppeteer";
import fs from "fs";
const out = "reference/wearerebel";
const url = process.argv[2] || "https://wearerebel.co/";
const name = process.argv[3] || "home";
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise(r => setTimeout(r, 3000));
fs.writeFileSync(`${out}/${name}.html`, await page.content());
// viewport frames while scrolling (lazy anims trigger)
const h = await page.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < h; y += 800) {
  await page.evaluate(y => window.scrollTo(0, y), y);
  await new Promise(r => setTimeout(r, 900));
  await page.screenshot({ path: `${out}/${name}-frame-${String(i++).padStart(2,"0")}.png` });
}
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: `${out}/${name}-full.png`, fullPage: true });
// computed styles summary
const info = await page.evaluate(() => {
  const pick = el => { const s = getComputedStyle(el); return { tag: el.tagName, cls: el.className?.toString().slice(0,80), text: el.innerText?.slice(0,80), font: s.fontFamily, size: s.fontSize, weight: s.fontWeight, lh: s.lineHeight, ls: s.letterSpacing, color: s.color, bg: s.backgroundColor, tt: s.textTransform }; };
  return { h, links: [...document.querySelectorAll('a')].map(a=>a.href).slice(0,80), headings: [...document.querySelectorAll('h1,h2,h3,h4,p,a,button')].slice(0,150).map(pick), fonts: [...document.fonts].map(f=>f.family+' '+f.weight+' '+f.status), videos: [...document.querySelectorAll('video, video source')].map(v=>v.src||v.currentSrc), imgs: [...document.querySelectorAll('img')].map(i=>i.src).slice(0,60) };
});
fs.writeFileSync(`${out}/${name}-styles.json`, JSON.stringify(info, null, 1));
await browser.close();
console.log("done", h, i);
