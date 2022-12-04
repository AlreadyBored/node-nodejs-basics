import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async (filePath) => {
  try {
    await fs.rm(filePath);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove(pathToFile);