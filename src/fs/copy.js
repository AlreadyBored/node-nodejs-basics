import fs from "node:fs/promises";
import { existsSync } from "fs";

const sourcePath = "src/fs/files";
const destinationPath = "src/fs/files_copy";
const error = "FS operation failed";

const copy = async () => {
  try {
    const isSourceExists = existsSync(sourcePath);
    const isCopyExists = existsSync(destinationPath);

    if (!isSourceExists || isCopyExists) {
      throw new Error(error);
    }

    await fs.cp(sourcePath, destinationPath, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};

await copy();
