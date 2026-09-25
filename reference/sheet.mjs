import puppeteer from "puppeteer"; import fs from "fs"; import path from "path";
const names = process.argv.slice(2);
const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--allow-file-access-from-files"] });
for (const n of names) {
  const dir = path.resolve("temporary screenshots", n);
  const files = fs.readdirSync(dir).filter(f => /^f\d+\.png$/.test(f)).sort();
  const html = `<body style="margin:0;background:#888;display:grid;grid-template-columns:repeat(6,240px);gap:4px">${files.map(f => `<div style="position:relative"><img src="file://${dir}/${f}" style="width:240px;display:block"><b style="position:absolute;top:2px;left:4px;background:#ff0;font:12px sans-serif">${f}</b></div>`).join("")}</body>`;
  const p = await browser.newPage(); await p.setViewport({ width: 1448, height: 400 });
  fs.writeFileSync(`${dir}/sheet.html`, html);
  await p.goto(`file://${dir}/sheet.html`, { waitUntil: "load" });
  await p.screenshot({ path: `temporary screenshots/sheet-${n}.png`, fullPage: true }); await p.close();
}
await browser.close();
