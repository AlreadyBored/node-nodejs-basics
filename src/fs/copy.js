import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const sourceFolderPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  const destinationFolderPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files_copy"
  );
  try {
    await fs.access(sourceFolderPath, fs.constants.R_OK);
    await fs.access(destinationFolderPath, fs.constants.R_OK);
    throw new Error("FS operation failed: Destination folder already exists");
  } catch (error) {
    console.log(error.code);
    if (error.code === "ENOENT") {
      await fs.mkdir(destinationFolderPath);
      const files = await fs.readdir(sourceFolderPath);

      for (const file of files) {
        const sourceFilePath = path.join(sourceFolderPath, file);
        const destinationFilePath = path.join(destinationFolderPath, file);

        const fileContent = await fs.readFile(sourceFilePath);
        await fs.writeFile(destinationFilePath, fileContent);
      }
    }
  }
};

await copy();
