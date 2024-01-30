import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldName = join(__dirname, "files", "wrongFilename.txt");
  const newName = join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(newName);
    console.error(new Error("FS operation failed"));
  } catch (error) {
    try {
      await fs.rename(oldName, newName);
    } catch (error) {
      console.error(new Error("FS operation failed"));
    }
  }
};

await rename();
