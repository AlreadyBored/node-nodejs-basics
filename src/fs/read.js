import fs from "node:fs/promises";
import { existsSync } from "fs";

const sourcePath = "src/fs/files/fileToRead.txt";
const error = "FS operation failed";

const read = async () => {
  try {
    const isSourceExists = existsSync(sourcePath);

    if (!isSourceExists) {
      throw new Error(error);
    }

    const data = await fs.readFile(sourcePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

await read();
