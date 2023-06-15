import { rename as renameFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const fileToRenamePath = join(__dirname, 'files', 'wrongFilename.txt');
  const renamedFilePath = join(__dirname, 'files', 'properFilename.md');

  try {
    await access(fileToRenamePath);

    try {
      await access(renamedFilePath);
      throw new Error('FS operation failed');
    } catch (err) {
      await renameFile(fileToRenamePath, renamedFilePath);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
