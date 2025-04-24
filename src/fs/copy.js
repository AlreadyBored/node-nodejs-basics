import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const srcDir = path.join(__dirname, "files");
  const copyFiles = path.join(__dirname, "files_copy");
  try {
    await fs.promises.access(srcDir);
    await fs.promises.access(copyFiles);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.cp(srcDir, copyFiles, { recursive: true });
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
