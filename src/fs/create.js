import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const create = async () => {
    // Write your code here 
    try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const freshFile = path.join(__dirname, 'files', 'fresh.txt');

      try {
        await fs.writeFile(freshFile, 'I am fresh and young', {flag: 'wx'});
        console.log('File created! ');
      } catch (error) {
        console.log(error.message);
        throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }
};

await create();  
