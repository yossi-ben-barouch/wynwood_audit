import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const configFiles = [
  { src: "client/public/_headers", dest: "dist/_headers" },
  { src: "client/public/_redirects", dest: "dist/_redirects" },
];

console.log("\n📋 Copying configuration files to dist...");
configFiles.forEach(({ src, dest }) => {
  const srcPath = join(process.cwd(), src);
  const destPath = join(process.cwd(), dest);

  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${src} → ${dest}`);
  } else {
    console.warn(`⚠ Warning: ${src} not found`);
  }
});

console.log("\n🎉 Post-build complete!");
