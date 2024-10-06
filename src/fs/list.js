import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const dirSrc = path.join(__dirname, "files");

  try {
    const files = await fs.readdir(dirSrc, { withFileTypes: true });
    const toTextFiles = files.map((file) => {
      return `Name: ${file.name}${file.isDirectory() ? ` is directory` : ``}`;
    });
    for (let file of toTextFiles) {
      console.log(file);
    }
  } catch (error) {
    if (error.code == "ENOENT")
      throw new Error(`FS operation failed: src dir doesn't exists`);
    else console.log(error);
  }
};

await list();
