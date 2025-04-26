import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(path.join(__dirname, 'files'), 'fresh.txt');

const create = async () => {
    if(fs.existsSync(filePath)){
        throw new Error('FS operation failed');
    }
    fs.appendFile(filePath, 'I am fresh and young', (err) => {
        if (err) throw err;
    })
};

await create();