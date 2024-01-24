import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const rename = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
      const propFile = path.join(__dirname, 'files', 'properFilename.md');

      if (!fs.existsSync(wrongFile) || fs.existsSync(propFile)) {
        throw new Error('FS operation failed');
      }

      fs.renameSync(wrongFile, propFile);
      console.log('rename completed');
    } catch (error) {
      console.error(error.message);
    }
};

await rename();