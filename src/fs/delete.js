import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { exists } from "./vendors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const dirPath = path.join(__dirname, "files");
  const filePath = path.join(dirPath, "fileToRemove.txt");

  if (!(await exists(filePath))) {
    throw new Error("FS operation failed");
  }

  await fs.unlink(filePath);
};

await remove();
