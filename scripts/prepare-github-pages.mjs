import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const indexPath = join(outDir, "index.html");
const fallbackPath = join(outDir, "404.html");
const noJekyllPath = join(outDir, ".nojekyll");

if (!existsSync(indexPath)) {
  console.error("Missing out/index.html — run build:pages first.");
  process.exit(1);
}

const heroPath = join(outDir, "images", "hero.jpg");
if (!existsSync(heroPath)) {
  console.error("Missing out/images/hero.jpg — hero image was not exported.");
  process.exit(1);
}

copyFileSync(indexPath, fallbackPath);
writeFileSync(noJekyllPath, "");
console.log("Prepared GitHub Pages output (404.html + .nojekyll).");