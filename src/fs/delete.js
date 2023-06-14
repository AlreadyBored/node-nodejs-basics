import { rm } from 'node:fs/promises';
import path from 'node:path';

const filePath = new URL(
  path.join('files', 'fileToRemove.txt'),
  import.meta.url
);
const errorMessage = 'FS operation failed';

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error(errorMessage);
  }
};

await remove();
