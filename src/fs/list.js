import fs from "node:fs/promises";
import { existsSync } from "fs";

const sourcePath = "src/fs/files";
const error = "FS operation failed";

const list = async () => {
  try {
    const isSourceExists = existsSync(sourcePath);

    if (!isSourceExists) {
      throw new Error(error);
    }

    const files = await fs.readdir(sourcePath);
    console.log(files);
  } catch (err) {
    console.log(err);
  }
};

await list();
