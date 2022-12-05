import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    // Write your code here 
    const pathToDir = `${__dirname}/files/`;
    const prReaddir = promisify(fs.readdir);

    try {
        const files = await prReaddir(pathToDir, {encoding: 'utf-8'});
        console.log(files);
    }
    catch(err) {
        throw new Error('FS operation failed')
    }
};

await list();