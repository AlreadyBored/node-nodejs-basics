import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const rename = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
      const propFile = path.join(__dirname, 'files', 'properFilename.md');

      try {
        let fileExist = false;
        try {
          await fs.access(propFile);
          fileExist = true;
        } catch (error) {
          await fs.rename(wrongFile, propFile);
          console.log('renamed');              
        } finally {
          if (fileExist)
            throw new Error('FS operation failed');
        }
      } catch (error) {
        throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }
};

await rename();