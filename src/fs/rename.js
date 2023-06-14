import { rename as fsRename } from 'node:fs/promises';
import path from 'node:path';

const oldPath = new URL(
  path.join('files', 'wrongFilename.txt'),
  import.meta.url
);
const newPath = new URL(
  path.join('files', 'properFilename.md'),
  import.meta.url
);
const errorMessage = 'FS operation failed';

const rename = async () => {
  try {
    await fsRename(oldPath, newPath);
  } catch {
    throw new Error(errorMessage);
  }
};

await rename();
