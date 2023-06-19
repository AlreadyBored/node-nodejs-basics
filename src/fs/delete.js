import { unlink } from 'node:fs/promises';
import { getPath } from "./getPath.js";

const remove = async () => {
  const src = getPath(import.meta.url, "fileToRemove.txt");

  try {
   await unlink(src);
  } catch (e) {
    throw new Error('FS operation failed: ' + e.message);
  }
};

await remove();