import { stat, unlink } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFileForDelete = __dirname + "/files/fileToRemove.txt";

  try {
    await stat(pathFileForDelete);
  } catch {
    throw new Error("FS operation failed");
  }

  unlink(pathFileForDelete);
};

remove();
