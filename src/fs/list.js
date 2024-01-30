import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  try {
    const result = await fs.readdir(join(__dirname, "files"));
    console.log(result);
  } catch (error) {
    console.error(new Error("FS operation failed"));
  }
};

await list();
