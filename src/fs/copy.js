import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { cp } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourceDir = path.join(__dirname, "files");
  const destDir = path.join(__dirname, "files_copy");

  if (!fs.existsSync(sourceDir)) {
    throw new Error("FS operation failed");
  }

  if (fs.existsSync(destDir)) {
    throw new Error("FS operation failed");
  }

  await cp(sourceDir, destDir, { recursive: true });
};

await copy();
