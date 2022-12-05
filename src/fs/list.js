import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files");

const list = async () => {
  try {
    const files = await fsPromises.readdir(src);
    for (let file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
