import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  // Write your code here
  const errMsg = "FS operation failed";
  try {
    await fs.rm(__dirname + "/files/fileToRemove.txt");
  } catch (err) {
    throw new Error(errMsg);
  }
};

await remove();
