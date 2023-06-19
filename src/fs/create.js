import fs from "fs";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    fs.access(filePath, fs.F_OK, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
        fs.appendFile(filePath, 'I am fresh and young', (err) => {
            if (err) throw err;
          });
    })
};

await create();