import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const remove = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const removeFile = path.join(__dirname, 'files', 'fileToRemove.txt');

      if (!fs.existsSync(removeFile)) {
        throw new Error('FS operation failed');
      }

      fs.rmSync(removeFile);
      console.log('file removed');
    } catch (error) {
      console.error(error.message);
    }
};

await remove();