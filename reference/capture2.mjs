import puppeteer from "puppeteer";
import fs from "fs";
const out = "reference/wearerebel";
const [url, name, video] = [process.argv[2], process.argv[3], process.argv[4] === "video"];
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
const media = new Set();
page.on("response", r => { const t = r.headers()["content-type"] || ""; if (/image|video|font/.test(t)) media.add(t.split(";")[0] + " " + r.url()); });
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise(r => setTimeout(r, 2500));
fs.writeFileSync(`${out}/${name}.html`, await page.content());
let rec = null;
if (video) rec = await page.screencast({ path: `${out}/${name}-scroll.webm` });
const h = await page.evaluate(() => document.documentElement.scrollHeight);
let i = 0;
for (let y = 0; y < h; y += video ? 40 : 800) {
  await page.evaluate(y => window.scrollTo(0, y), y);
  await new Promise(r => setTimeout(r, video ? 60 : 900));
  if (!video) await page.screenshot({ path: `${out}/${name}-frame-${String(i++).padStart(2,"0")}.png` });
}
if (rec) await rec.stop();
fs.writeFileSync(`${out}/${name}-media.txt`, [...media].join("\n"));
const info = await page.evaluate(() => [...document.querySelectorAll('h1,h2,h3,p,a,span,div.sb-mc')].filter(e => e.children.length === 0 && e.innerText?.trim()).slice(0,200).map(el => { const s = getComputedStyle(el); return `${s.fontFamily} | ${s.fontSize}/${s.lineHeight} | w${s.fontWeight} | ls ${s.letterSpacing} | ${s.color} | ${el.innerText.trim().slice(0,60).replace(/\n/g,' ')}`; }));
fs.writeFileSync(`${out}/${name}-styles.txt`, info.join("\n"));
await browser.close();
console.log(name, h, i);
