import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    // Write your code here 
    const file = `${__dirname}/files/fresh.txt`;

    const prAccess = promisify(fs.access);
    const prWriteFile = promisify(fs.writeFile);

    try {
        await prAccess(file, fs.constants.F_OK);
    }
    catch (err) {
        await prWriteFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young');
        return; 
    }
    throw new Error('FS operation failed'); 
};

await create();