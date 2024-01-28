import { writeFile, existsSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const create = async () => {
    const data = 'I am fresh and young';
    const dirPath = join(__dirname, '/files/fresh.txt');

    writeFile(dirPath, data, {flag:'wx'},(err) => {
        if (err){
        throw new Error('FS operation failed!');
        }
      });
};

await create();