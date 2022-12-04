import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToDir = path.join(__dirname, "files");
const list = async (dirPath) => {
  try {
    const dir = await fs.readdir(dirPath);
    console.log(dir);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list(pathToDir);