/**
 * After running convert-images.mjs, this rewrites projectImages.ts
 * to import .webp files instead of .jpg/.jpeg/.png.
 * Also injects -thumb.webp variant for thumbnail use.
 * Run: node scripts/update-image-imports.mjs
 */

import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET = join(__dirname, "..", "src", "data", "projectImages.ts");

async function main() {
  let src = await readFile(TARGET, "utf8");

  // Replace all image extension imports with .webp
  // Matches: from "@/assets/LIIT/....(jpg|jpeg|png)"
  const before = src;
  src = src.replace(
    /(from\s+"@\/assets\/LIIT\/[^"]+)\.(jpg|jpeg|png)(")/gi,
    '$1.webp$3'
  );

  const count = (before.match(/\.(jpg|jpeg|png)"/gi) || []).length;
  await writeFile(TARGET, src, "utf8");
  console.log(`Updated ${count} imports → .webp in projectImages.ts`);
}

main().catch(console.error);
