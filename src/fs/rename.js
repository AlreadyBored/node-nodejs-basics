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

      let isExists = false;
      try {
        await fs.access(propFile);
        isExists = true;
        console.log('properFilename.md already exist');
      } catch (error) {
        try {
          await fs.rename(wrongFile, propFile);
          console.log('renamed');  
        } catch (error) {
          console.log(error.message);
          isExists = true;
        }
      }
      if (isExists)
        throw new Error('FS operation failed');
    } catch (error) {
      console.error(error.message);
    }
};

await rename();