import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const list = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      const mainPath = path.join(__dirname, 'files');

      try {
        const arrOfFiles = [];
        const files = await fs.readdir(mainPath);
        files.forEach((file) => {
          arrOfFiles.push(file);
        });
        console.log(arrOfFiles);
      } catch (error) {
        throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }

};

await list();