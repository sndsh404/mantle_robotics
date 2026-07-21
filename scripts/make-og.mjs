import { chromium } from "playwright-core";

const html = `<!doctype html><html><head><style>
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;1,6..72,300&family=JetBrains+Mono:wght@500&display=swap');
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: #0D1117;
    display: flex; flex-direction: column; justify-content: center;
    padding: 80px; position: relative; overflow: hidden;
    font-family: Georgia, serif;
  }
  .bar { position: absolute; top: 0; left: 0; right: 0; height: 10px; background: #F2612B; }
  .brand { display: flex; align-items: center; gap: 18px; z-index: 1; }
  .word { color: #FAF9F5; font-family: 'JetBrains Mono', monospace; font-size: 28px; letter-spacing: 0.08em; }
  h1 { z-index: 1; margin-top: 36px; color: #FAF9F5; font-family: 'Newsreader', Georgia, serif;
    font-weight: 300; font-size: 84px; line-height: 1.04; letter-spacing: -0.02em; max-width: 20ch; word-spacing: 0.06em; }
  .sub { z-index: 1; margin-top: 28px; color: rgba(250,249,245,0.6);
    font-family: 'JetBrains Mono', monospace; font-size: 18px; letter-spacing: 0.08em; text-transform: uppercase; }
</style></head><body>
  <div class="bar"></div>
  <div class="brand">
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
      <path d="M12 13.5 19 18 12 22.5 5 18 12 13.5Z" fill="#FAF9F5" opacity="0.35"/>
      <path d="M12 7.5 19 12 12 16.5 5 12 12 7.5Z" fill="#FAF9F5" opacity="0.75"/>
      <path d="M12 1.5 19 6 12 10.5 5 6 12 1.5Z" fill="#F2612B"/>
    </svg>
    <span class="word">MANTLE ROBOTICS</span>
  </div>
  <h1>The debugging platform for robot fleets.</h1>
  <div class="sub">CAPTURE THE MOMENT · SHIP THE FIX</div>
</body></html>`;

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("saved public/og.png");
