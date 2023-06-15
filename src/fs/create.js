import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    } else {
      fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) throw err;
        console.log('File has been created successfully.');
      });
    }
  });

};

await create();