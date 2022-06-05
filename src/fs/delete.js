import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
  const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.rm(fileToRemove);
  } catch (error) {
    if ((error.code = "ENOENT")) throw Error("FS operation failed");
    throw Error(error);
  }
};

await remove();
