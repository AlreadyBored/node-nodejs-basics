import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const files = await fs.readdir(path.join(__dirname, "files"));
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
