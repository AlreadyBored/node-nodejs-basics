import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fileToRead.txt");
const read = async (filePath) => {
  try {
    const dir = await fs.readFile(filePath, { encoding: "utf8" });
    console.log(dir);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read(pathToFile);