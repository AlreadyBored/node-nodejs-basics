

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
  try {
    await fs.access(filePath);
    throw new Error('File already exists');
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }  

  await fs.writeFile(filePath, fileContent);
};

await create();