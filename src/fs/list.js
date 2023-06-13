import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const list = async () => {
    // Write your code here
  const filesDir = `${new URL(".", import.meta.url).pathname}files/`;

  try {
    if (!existsSync(filesDir)) throw Error('FS operation failed');
    const files = await readdir(filesDir);
    console.log(files);
  } catch (e) {
    console.error(e);
  }
};

await list();