import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const readFile = path.join(__dirname, 'files', 'fileToRead.txt');

      if (!fs.existsSync(readFile)) {
        throw new Error('FS operation failed');
      }

      console.log(fs.readFileSync(readFile, 'utf-8'));
    } catch (error) {
      console.error(error.message);
    }
};

await read();