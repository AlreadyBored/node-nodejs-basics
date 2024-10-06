import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const rename = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const wrongFile = path.join(__dirname, "files", "wrongFilename.txt");
  const properFile = path.join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(properFile, fs.constants.F_OK);
    throw new Error("FS operation failed");
  } catch {
    try {
      await fs.access(wrongFile, fs.constants.F_OK);
    } catch (error) {
      throw new Error("FS operation failed");
    }
    fs.rename(wrongFile, properFile);
  }
};

await rename();
