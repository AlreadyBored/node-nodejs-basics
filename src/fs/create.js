import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFreshFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    // Write your code here 
   try {
        await fs.writeFile(pathToFreshFile, 'I am fresh and young', { flag: 'wx' });
   } catch (error) {
        throw new Error('FS operation failed');
   }

};

await create();