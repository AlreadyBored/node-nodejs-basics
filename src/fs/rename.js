import { rename as fsRename } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const wrongFilename = "wrongFilename.txt";
  const properFilename = "properFilename.md";
  try {
    const oldPath = `${__dirname}/files/${wrongFilename}`;
    const newPAth = `${__dirname}/files/${properFilename}`;
    await fsRename(oldPath, newPAth);
  } catch (error) {
    console.error("FS operation failed:");
  }
};

await rename();
