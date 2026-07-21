import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

const outDir = "docs/design-references";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });

for (const [name, width, height] of [
  ["mantle-desktop-1440", 1440, 900],
  ["mantle-mobile-390", 390, 844],
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  // let fonts + reveal animations settle; force reveals for full-page shot
  await page.waitForTimeout(1200);
  await page.evaluate(() => {
    document.querySelectorAll(".fade-up").forEach((el) => el.classList.add("revealed"));
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true });
  console.log(`saved ${outDir}/${name}.png`);
  await page.close();
}

await browser.close();
