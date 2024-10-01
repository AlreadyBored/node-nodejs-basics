import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.join(__dirname, "files", "wrongFilename.txt");
const destPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.access(srcPath);
    await fs.access(destPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      if (err.path === srcPath) {
        throw new Error("FS operation failed");
      }
      await fs.rename(srcPath, destPath);
      console.log("File renamed successfully");
    } else {
      throw err;
    }
  }
};

await rename();
