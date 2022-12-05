import { access, appendFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "fresh.txt");
const create = async () => {
  try {
    await access(src);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message === "FS operation failed") {
      throw err;
    }
    appendFile(src, "I am fresh and young");
  }
};

await create();
