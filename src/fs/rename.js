import { access, rename as rename_fs } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorText = 'FS operation failed';

const rename = async () => {
  const folderPath = path.join(__dirname, 'files');
  const fileToRename = path.join(folderPath, 'wrongFilename.txt');
  const resultFile = path.join(folderPath, 'properFilename.md');

  try {
    await access(fileToRename, constants.F_OK);
    try {
      await access(resultFile, constants.F_OK);
      throw new Error(errorText);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw new Error(errorText);
      }
    }
    await rename_fs(fileToRename, resultFile);
  } catch (error) {
    throw new Error(errorText);
  }
};

await rename();
