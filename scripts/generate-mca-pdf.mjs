import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputHtml = path.resolve(
  __dirname,
  "..",
  "..",
  "landiq-mca-v1.1.html"
);
const outputPath = path.resolve(
  __dirname,
  "..",
  "..",
  "landiq-mca-v1.1.pdf"
);

async function generateMcaPDF() {
  console.log("🚀 Launching browser for MCA...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const fileUrl = "file://" + inputHtml;
  console.log("📄 Loading:", fileUrl);
  await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 30000 });

  console.log("📑 Generating PDF (A4, print backgrounds)...");
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: { top: "22mm", right: "20mm", bottom: "22mm", left: "20mm" },
  });

  await browser.close();
  console.log(`✅ MCA PDF saved to: ${outputPath}`);
}

generateMcaPDF().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
