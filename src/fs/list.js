import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const list = async () => {
  try {
    console.log(await readdir(`${dirName}/files`));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
