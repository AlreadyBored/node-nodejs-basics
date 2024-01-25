import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  try {
    await fs.access(join(__dirname, "files", "fresh.txt"));
    console.error(new Error("FS operation failed"));
  } catch (error) {
    fs.appendFile(
      join(__dirname, "files", "fresh.txt"),
      "I am fresh and young"
    );
  }
};

await create();
