import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fresh.txt");
const fileData = "I am fresh and young";

const create = async (filePath, fileData) => {
  try {
    await fs.writeFile(filePath, fileData, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create(pathToFile, fileData);