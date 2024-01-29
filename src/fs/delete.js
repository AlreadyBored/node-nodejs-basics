import fs from "node:fs/promises";
import { existsSync } from "fs";

const sourcePath = "src/fs/files/fileToRemove.txt";
const error = "FS operation failed";

const remove = async () => {
  try {
    const isSourceExists = existsSync(sourcePath);

    if (!isSourceExists) {
      throw new Error(error);
    }

    await fs.unlink(sourcePath);
  } catch (err) {
    console.log(err);
  }
};

await remove();
