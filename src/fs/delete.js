import { rm } from "fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const folderPath = join(__dirname, "files");
  const filePath = join(folderPath, "fileToRemove.txt");

  try {
    await rm(filePath);
  } catch {
    throw "FS operation failed";
  }
};

await remove();
