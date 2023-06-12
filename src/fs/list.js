import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const scrPath = path.join(dir, "files");
  try {
    await listDir(scrPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

const listDir = async (srcPath, level = 0) => {
  const files = await fs.readdir(srcPath);
  for (const file of files) {
    const fullPath = path.join(srcPath, file);
    const stat = await fs.stat(fullPath);
    console.log(`${"".padStart(level, "-")}${file}`);
    if (stat.isDirectory()) {
      await listDir(fullPath, level + 1);
    }
  }
};

await list();
