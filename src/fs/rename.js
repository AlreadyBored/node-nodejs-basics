import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const oldPath = path.join(dir, "files", "wrongFilename.txt");
  const newPath = path.join(dir, "files", "properFilename.md");
  let newExists = false;
  try {
    newExists = await fs.access(newPath);
  } catch {}
  if (newExists === undefined) {
    throw new Error("FS operation failed");
  }
  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
