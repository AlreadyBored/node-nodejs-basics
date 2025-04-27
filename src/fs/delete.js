import fs from 'fs';
import path from 'path';

const remove = async () => {
    const filePath = path.join(process.cwd(), 'files', 'fileToRemove.txt');

    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }
  
    fs.unlinkSync(filePath);
}

await remove();