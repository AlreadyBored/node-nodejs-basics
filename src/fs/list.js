import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

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