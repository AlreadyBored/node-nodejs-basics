import fsPromises from "fs/promises";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const wrongFile = path.join(basePath, "/files/wrongFilename.txt");
  const properFile = path.join(basePath, "/files/properFilename.md");

  const errorMessage = "FS operation failed";

  if (!fs.existsSync(wrongFile)) {
    throw new Error(errorMessage);
  }

  if (fs.existsSync(properFile)) {
    throw new Error(errorMessage);
  }

  try {
    await fsPromises.access(wrongFile);
  } catch (error) {
    throw new Error(errorMessage);
  }

  await fsPromises.rename(wrongFile, properFile)

};

await rename();