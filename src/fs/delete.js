import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const remove = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const removeFile = path.join(__dirname, 'files', 'fileToRemove.txt');

      let fileExist = true;
      try {
        await fs.rm(removeFile);
        console.log('file removed');
      } catch (error) {
        fileExist = false;
      } finally {
        if (!fileExist)
          throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }
};

await remove();