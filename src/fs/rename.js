import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToSrcFile = path.join(__dirname, "files", "wrongFilename.txt");
const pathToDestFile = path.join(__dirname, "files", "properFilename.md");

const rename = async (srcPath, destPath) => {
  try {
    await fs.rename(srcPath, destPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename(pathToSrcFile, pathToDestFile);