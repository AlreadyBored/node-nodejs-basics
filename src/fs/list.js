import { promises as fsPromises } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve("src/fs/files");
const errorMessage = "FS operation failed";

const list = async () => {
  try {
    const files = await fsPromises.readdir(filePath);
    for (const file of files) console.log(file);
  } catch (err) {
    throw new Error(errorMessage);
  }
};

await list();
