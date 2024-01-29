import fsPromises from "fs/promises";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const sourceFolderPath = path.join(basePath, "/files");
  const destinationFolderPath = path.join(basePath, "/files_copy");

  const errorMessage = "FS operation failed";

  if (!fs.existsSync(sourceFolderPath)) {
    throw new Error(errorMessage);
  }

  if (fs.existsSync(destinationFolderPath)) {
    throw new Error(errorMessage);
  }

  try {
    await fsPromises.cp(sourceFolderPath, destinationFolderPath, {recursive: true});
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await copy();
