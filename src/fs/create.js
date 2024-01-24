import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = path.join(__dirname, 'files');
const filePath = path.join(folderPath, 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {

    try {
        await fs.mkdir(folderPath, { recursive: true });
        await fs.writeFile(filePath, fileContent, { flag: 'wx' });
        console.log('File created successfully!');
      } catch (err) {
        if (err.code === 'EEXIST') {
          throw new Error('FS operation failed');
        }
        console.error(err);
      }
};

await create();