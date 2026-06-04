/**
 * Converts all JPG/PNG/JPEG images in src/assets/LIIT to WebP.
 * Generates: <name>.webp (full) and <name>-thumb.webp (400px thumbnail)
 * Originals are kept untouched.
 * Run: node scripts/convert-images.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "src", "assets", "LIIT");
const SUPPORTED = new Set([".jpg", ".jpeg", ".png"]);
const WEBP_QUALITY = 82;
const THUMB_SIZE = 400;

let converted = 0;
let skipped = 0;
let errors = 0;
let savedMB = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (SUPPORTED.has(extname(e.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function convertFile(srcPath) {
  const dir = dirname(srcPath);
  const base = basename(srcPath, extname(srcPath));
  const webpPath = join(dir, `${base}.webp`);
  const thumbPath = join(dir, `${base}-thumb.webp`);

  const srcStat = await stat(srcPath);
  const srcKB = srcStat.size / 1024;

  // Full WebP
  try {
    const info = await sharp(srcPath)
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);

    const dstKB = info.size / 1024;
    const saved = srcKB - dstKB;
    savedMB += saved / 1024;

    const pct = Math.round((saved / srcKB) * 100);
    console.log(`  ✓ ${basename(srcPath)} → ${Math.round(dstKB)}KB (−${pct}%)`);
  } catch (e) {
    console.error(`  ✗ ${basename(srcPath)}: ${e.message}`);
    errors++;
    return;
  }

  // Thumbnail WebP (400px wide, quality 75)
  try {
    await sharp(srcPath)
      .resize(THUMB_SIZE, null, { withoutEnlargement: true })
      .webp({ quality: 75, effort: 4 })
      .toFile(thumbPath);
  } catch (e) {
    console.error(`  ✗ thumbnail ${basename(srcPath)}: ${e.message}`);
  }

  converted++;
}

async function main() {
  console.log(`Scanning ${ROOT}...\n`);
  const files = await walk(ROOT);
  console.log(`Found ${files.length} images. Converting...\n`);

  // Process in batches of 4 to avoid memory spikes with large PNGs
  const BATCH = 4;
  for (let i = 0; i < files.length; i += BATCH) {
    const batch = files.slice(i, i + BATCH);
    await Promise.all(batch.map(convertFile));
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`Converted : ${converted}`);
  console.log(`Errors    : ${errors}`);
  console.log(`Est. saved: ${savedMB.toFixed(0)} MB`);
  console.log(`─────────────────────────────────`);
  console.log(`\nNext: update projectImages.ts to import .webp files.`);
  console.log(`Run: node scripts/update-image-imports.mjs`);
}

main().catch(console.error);
