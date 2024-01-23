import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "wrongFilename.txt");
  const destPath = path.join(__dirname, "files", "properFilename.md");

  try {
    await fs.promises.stat(sourcePath);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed!");
    } else {
      throw err;
    }
  }
  try {
    await fs.promises.stat(destPath);
    throw new Error("FS operation failed!");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.rename(sourcePath, destPath);
      console.log("file is renamed!");
    } else {
      throw err;
    }
  }
};

await rename();
