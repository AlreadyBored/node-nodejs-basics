import fs from "node:fs/promises";
import { existsSync } from "fs";

const sourcePath = "src/fs/files/wrongFilename.txt";
const newSourcePath = "src/fs/files/properFilename.md";
const error = "FS operation failed";

const rename = async () => {
  try {
    const isSourceExists = existsSync(sourcePath);
    const isNewSourceExists = existsSync(newSourcePath);

    if (!isSourceExists || isNewSourceExists) {
      throw new Error(error);
    }

    await fs.rename(sourcePath, newSourcePath);
  } catch (err) {
    console.log(err);
  }
};

await rename();
