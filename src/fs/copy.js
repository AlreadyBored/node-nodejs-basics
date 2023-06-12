import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const srcPath = path.join(dir, "files");
  const destPath = path.join(dir, "files_copy");
  let destExists = false;
  try {
    destExists = await fs.access(destPath);
  } catch {}
  if (destExists === undefined) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.cp(srcPath, destPath, {
      recursive: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
