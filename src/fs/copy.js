import { mkdir, readdir, copyFile, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { constants } from "node:fs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const copy = async () => {
  const sourcePath = path.join(dirname, "files");
  const destinationPath = path.join(dirname, "files_copy");

  try {
    await access(sourcePath, constants.R_OK);

    try {
      await access(destinationPath, constants.F_OK);
      throw new Error("FS operation failed");
    } catch (error) {}

    await mkdir(destinationPath);
    const files = await readdir(sourcePath);

    for (const file of files) {
      const sourceFile = path.join(sourcePath, file);
      const destinationFile = path.join(destinationPath, file);
      await copyFile(sourceFile, destinationFile);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
