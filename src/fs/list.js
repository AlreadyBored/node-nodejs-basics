import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const list = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);

      const mainPath = path.join(__dirname, 'files');
      if (!fs.existsSync(mainPath)) {
        throw new Error('FS operation failed');
      }

      const arrOfFiles = [];
      fs.readdirSync(mainPath).forEach((file) => {
        arrOfFiles.push(file);
      });
    
      console.log(arrOfFiles);
    } catch (error) {
      console.error(error.message);
    }

};

await list();