import { rename as fsRename, access } from 'fs/promises';
import { constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = join(__dirname, 'files', 'properFilename.md');

  try {
    
    await access(oldPath, constants.F_OK);

    
    try {
      await access(newPath, constants.F_OK);
      throw new Error('FS operation failed');
    } catch {
      
    }

    
    await fsRename(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
