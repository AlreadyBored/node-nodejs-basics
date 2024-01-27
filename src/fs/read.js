import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { access, readFile } from "fs/promises";

const pathToFile = join(dirname(fileURLToPath(import.meta.url)), "files", "fileToRead.txt");

const read = async () => {
  try {
    await access(pathToFile);
    const contents = await readFile(pathToFile, "utf8");
    console.log(contents);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
