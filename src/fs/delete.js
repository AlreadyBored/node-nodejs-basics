import fsPromises from "fs/promises";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToBeDeleted = path.join(basePath, "/files/fileToRemove.txt");

  const errorMessage = "FS operation failed";

  if (!fs.existsSync(fileToBeDeleted)) {
    throw new Error(errorMessage);
  }

  try {
    await fsPromises.unlink(fileToBeDeleted);
  } catch (error) {
    throw new Error(errorMessage);
  }

};

await remove();