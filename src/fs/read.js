import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const read = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const readFile = path.join(__dirname, 'files', 'fileToRead.txt');

      try {
        const content = await fs.readFile(readFile, 'utf-8');
        console.log(content);
      } catch (error) {
        throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }
};

await read();