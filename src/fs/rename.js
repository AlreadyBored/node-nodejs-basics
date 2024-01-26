import { rename as renameFileFs } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const errorMessage = 'FS operation failed';

const rename = async () => {
  const oldName = 'wrongFilename.txt';
  const newName = 'properFilename.md';
  const fromPath = path.join(__dirname, 'files', oldName);
  const targetPath = path.join(__dirname, 'files', newName);

  try {
    await renameFileFs(fromPath, targetPath);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await rename();
