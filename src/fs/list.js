import { readdir } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const list = async () => {
  try {
    const filesPath = path.join(dirname, "files");

    const files = await readdir(filesPath);

    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
