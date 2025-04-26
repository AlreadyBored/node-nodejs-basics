import { fileURLToPath } from 'url';
import path from 'path';
import { rename as fsRename, access, constants } from 'fs/promises';

const rename = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    await access(oldPath, constants.F_OK);

    try {
      await access(newPath, constants.F_OK);
      throw new Error('FS operation failed');
    } catch (newPathError) {
      if (newPathError.code !== 'ENOENT') {
        throw new Error('FS operation failed');
      }
      await fsRename(oldPath, newPath);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();