import { rename as giveNewName} from 'node:fs/promises';
import { getPath } from "./getPath.js";

const rename = async () => {
    const oldName = getPath(import.meta.url, "wrongFilename.txt");
    const newName = getPath(import.meta.url, "properFilename.md");

  try {
   await giveNewName(oldName,newName);
  } catch (e) {
    throw new Error('FS operation failed: ' + e.message);
  }
};

await rename();