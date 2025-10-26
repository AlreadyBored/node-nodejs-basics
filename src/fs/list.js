import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const files = await fs.readdir(path.resolve(__dirname, "files"));
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
