import puppeteer from "puppeteer";
const [url, out, w, h] = [process.argv[2], process.argv[3], +process.argv[4] || 1440, +process.argv[5] || 900];
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] }); const p = await b.newPage();
await p.setViewport({ width: w, height: h });
await p.evaluateOnNewDocument(() => localStorage.setItem("cookie-consent", "declined"));
await p.goto(url, { waitUntil: "networkidle0" }); await new Promise(r => setTimeout(r, 600));
await p.click(".r-side button"); await new Promise(r => setTimeout(r, 900));
await p.screenshot({ path: out }); await b.close();
