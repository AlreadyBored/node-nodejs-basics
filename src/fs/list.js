import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readdir, access } from "fs/promises";

const pathToFolder = join(dirname(fileURLToPath(import.meta.url)), "files");

const list = async () => {
  try {
    await access(pathToFolder);
    const files = await readdir(pathToFolder);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
