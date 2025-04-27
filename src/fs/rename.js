import fs from 'fs';
import path from 'path';

const rename = async () => {
    const oldPath = path.join(process.cwd(), 'files', 'wrongFilename.txt');
    const newPath = path.join(process.cwd(), 'files', 'properFilename.md');
  
    if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
      throw new Error('FS operation failed');
    }
  
    fs.renameSync(oldPath, newPath);
  };

await rename();