import { access, rename as renameFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const rename = async () => {
    const folderPath = path.join(__dirname, 'files');
    const oldPath = path.join(folderPath, 'wrongFilename.txt');
    const newPath = path.join(folderPath, 'properFilename.md');
  
    try {
      await access(oldPath);
  
      try {
        await access(newPath);
        throw new Error('FS operation failed');
      } catch {
      }
  
      await renameFile(oldPath, newPath);
      console.log('File renamed successfully.');
    } catch (err) {
      throw new Error('FS operation failed');
    }
};

await rename();