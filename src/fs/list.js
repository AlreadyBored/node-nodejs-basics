import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  // Write your code here
  const errMsg = "FS operation failed";
  try {
    const readSourceFolder = await fs.readdir(__dirname + "/files");
    readSourceFolder.forEach((fileName) => console.log(fileName));
  } catch (err) {
    throw new Error(errMsg);
  }
};

await list();
