import { readdir } from 'node:fs/promises';
import { getPath } from "./getPath.js";

const list = async () => {
    const src = getPath(import.meta.url);

  try {
    const files = await readdir(src);
    console.log(files);
  } catch (e) {
    throw new Error('FS operation failed: ' + e.message);
  }
};

await list();