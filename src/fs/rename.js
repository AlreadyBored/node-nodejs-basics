import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');
  
    try {
      // check if old file exists
      await fs.access(oldPath);
      // check if new file already exists
      await fs.access(newPath);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') {
        // either old file doesn't exist or new file doesn't exist
        // need to check which one
        try {
          // try to access old file again to confirm it doesn't exist
          await fs.access(oldPath);
          // old file exists, proceed to rename
          await fs.rename(oldPath, newPath);
        } catch {
          throw new Error('FS operation failed');
        }
      } else {
        throw err;
      }
    }
  };
  
await rename();
  