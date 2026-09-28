import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const INPUT_DIR = new URL("../public/images", import.meta.url).pathname;

const QUALITY_MAP = {
  // Portrait images shown at max ~240px — can be aggressively compressed
  "portrait-": 70,
  // Hero / scene images shown large
  "hero-": 72,
  "student": 72,
  "students": 72,
};

function getQuality(filename) {
  for (const [prefix, q] of Object.entries(QUALITY_MAP)) {
    if (filename.startsWith(prefix)) return q;
  }
  return 72;
}

async function compress() {
  const files = await readdir(INPUT_DIR);
  const jpgs = files.filter((f) => extname(f).toLowerCase() === ".jpg");

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of jpgs) {
    const inputPath = join(INPUT_DIR, file);
    const { size: before } = await stat(inputPath);
    totalBefore += before;

    const quality = getQuality(file);

    // Write to temp then replace
    const tmpPath = inputPath + ".tmp";
    await sharp(inputPath)
      .jpeg({ quality, mozjpeg: true, progressive: true })
      .toFile(tmpPath);

    const { size: after } = await stat(tmpPath);
    totalAfter += after;

    const pct = (((before - after) / before) * 100).toFixed(1);
    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (-${pct}%)`
    );

    // Replace original
    const { rename } = await import("fs/promises");
    await rename(tmpPath, inputPath);
  }

  console.log("\n─────────────────────────────────────");
  console.log(
    `Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`
  );
}

compress().catch(console.error);
