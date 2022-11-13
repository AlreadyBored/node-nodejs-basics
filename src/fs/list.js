import fs from 'fs';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const list = await readdir(path.resolve(__dirname, 'files'))
      .catch(e =>console.log('FS operation failed'))
    console.log(list);
};

await list();